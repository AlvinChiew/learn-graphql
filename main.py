import requests


def graphql_query(query):
    url = "http://localhost:4000/graphql"
    headers = {"Content-Type": "application/json"}
    data = {"query": query}
    response = requests.post(url, headers=headers, json=data)
    return response.json()


# Example query
query = """#graphql
{
  game(id: 1) {
    id
    platform
    title
  }
}
"""

mutation_delete = """#graphql
mutation{
    deleteGame(id: 1) {
      id,
      title,
      platform
    }
}
"""

mutation_add = """#graphql
mutation{
    addGame(game: {
      title: "tekken",
      platform: ["PC", "ps5"]
    }) {
      id
      title
      platform
    }
}
"""

mutation_edit = """#graphql
mutation{
    editGame(id: 2, edits: {title: "diablo"}) {
      title,
      platform
    }
}
"""


result = graphql_query(mutation_edit)
print(result)
