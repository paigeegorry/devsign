export const getToken = state => state.session.token;

export const getUserHandle = state => state.session.handle;

export const getUserProfilePicture = state => state.session.profilePicture || 'https://res.cloudinary.com/dkrup6iyl/image/fetch/v1552429847/https://res.cloudinary.com/dkrup6iyl/image/upload/v1552429521/download.png';
