const redirectUri = "http://localhost:3000/";

const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
} = process.env;

const scopes = [
  "streaming",
  "user-read-email",
  "user-read-private",
];

export const loginUrl = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`;

// loginUrl = "https://accounts.spotify.com/authorize?client_id=YourClientId&response_type=code&redirect_uri=https://localhost:3000/&scope=streaming%20user-read-email%20user-read-private"