` 
query GamesQuery {
    games {
      title,
      platform
    }
  }
`;

`
query ReviewQuery($id: ID!){
    review(id: $id) {
      rating, 
      content
    }
  }

  VARIABLES
  {
    "id": "1"
  }
`;

`
query GamesQuery($id: ID!) {
    game(id: $id) {
      title,
      reviews {
        content
        rating
      }
    }
  }

  VARIABLES
  {
    "id": "1"
  }
`;

`
query Review($id: ID!) {
    review(id: $id) {
      rating
      game {
        title
        reviews {
          rating
        }
      }
    }
  }

  VARIABLES
  {
    "id": "1"
  }
`;

`
mutation DeleteMutation( $deleteGameId: ID!) {
    deleteGame(id: $deleteGameId) {
      id, 
      title,
      platform
    }
  }

  VARIABLES
  {
    "deleteGameId": "1"
  }

query Games {
    games {
      id
      platform
      title
    }
  }
`;

`
mutation AddMutation($game: AddGameInput!) {
    addGame(game: $game) {
      id
      title
      platform
    }
  }
  VARIABLES
  {
    "game": {
      "title": "tekken",
      "platform": ["PC", "ps5"]
    }
  }

  query Games {
    games {
      id
      platform
      title
    }
  }
`;

`
mutation EditGame($id: ID!, $edits: EditGameInput) {
    editGame(id: $id, edits: $edits) {
      title,
      platform
    }
  }
  VARIABLES
  {
    "id": 2,
    "edits": {
      "title": "diablo"
    }
  }
  query Games {
    games {
      id
      platform
      title
    }
  }
`;
