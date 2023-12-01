// Filename: complexCode.js
// Content: A complex implementation of a social media platform

class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.friends = [];
  }

  addFriend(user) {
    this.friends.push(user);
    user.friends.push(this);
  }

  removeFriend(user) {
    this.friends = this.friends.filter(friend => friend !== user);
    user.friends = user.friends.filter(friend => friend !== this);
  }
}

class Post {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.comments = [];
    this.likes = 0;
  }

  addComment(user, text) {
    const comment = {
      user,
      text
    };
    this.comments.push(comment);
  }

  like() {
    this.likes++;
  }
}

class SocialMediaPlatform {
  constructor() {
    this.users = [];
    this.posts = [];
  }

  registerUser(name, age, email) {
    const user = new User(name, age, email);
    this.users.push(user);
    return user;
  }

  createPost(user, content) {
    const post = new Post(user, content);
    this.posts.push(post);
    return post;
  }

  displayUserPosts(user) {
    const userPosts = this.posts.filter(post => post.user === user);
    userPosts.forEach(post => {
      console.log(`${post.content} - ${post.likes} likes`);
      console.log('Comments:');
      post.comments.forEach(comment => {
        console.log(`${comment.user.name}: ${comment.text}`);
      });
    });
  }

  deletePost(post) {
    this.posts = this.posts.filter(p => p !== post);
  }
}

// Usage example
const socialMedia = new SocialMediaPlatform();

const user1 = socialMedia.registerUser('John Doe', 25, 'john.doe@example.com');
const user2 = socialMedia.registerUser('Jane Smith', 30, 'jane.smith@example.com');
const user3 = socialMedia.registerUser('Mike Johnson', 28, 'mike.johnson@example.com');

const post1 = socialMedia.createPost(user1, 'Hello world!');
post1.like();
post1.addComment(user2, 'Nice post.');

const post2 = socialMedia.createPost(user2, 'Amazing day today!');
post2.like();
post2.like();
post2.addComment(user1, 'I agree.');

socialMedia.displayUserPosts(user1);

socialMedia.deletePost(post1);

socialMedia.displayUserPosts(user1);