const axios = require('axios');
const crypto = require('crypto');

/**
 * @desc Marshalls a comment into the format that
 * we need it, and adds the required attributes in
 * order for graphql to register it as a node.
 */

function processComment (comment) {
  const commentData = {
    name: comment.name,
    text: comment.text,
    createdAt: comment.createdAt,
    url: comment.slug,
    approved: comment.approved,
    parentCommentId: comment.parentCommentId,
  }

  return {
    ...commentData,
    // Required fields.
    id: `${comment.id}`,
    parent: null,
    children: [],
    internal: {
      type: `Comment`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(commentData))
        .digest(`hex`),
    }
  }
}

exports.sourceNodes = async ({ actions }, configOptions) => {
  const { createNode } = actions
  // Create nodes here.
  try {
    // We will include the API as a gatsby-config option when we hook the
    // plugin up. 
    const apiUrl = configOptions.url;
    // Fetch the data
    const response = await axios.get(apiUrl);
    console.log(response);
    const comments = response.data;
    // Process data into nodes.
    comments.forEach(comment => createNode(processComment(comment)))
  } catch (err) {
    console.log(err);
  }

  return
} 