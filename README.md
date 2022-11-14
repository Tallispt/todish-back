# todish-back

Todish is a todo list api made in typescript with NodeJs and Prisma (Postgresql).

## Routes

- **post** /singup

```
  {
    username: "testUser",
    password: "1234",
    confirmPassword: "1234"
  }
```

- **post** /singin

```
  {
    username: "testUser",
    password: "1234"
  }
```

```
//Response
  {
    username: "testUser",
    token: "token..."
  }
```
- **post** /todo *(Barer Authentication)*

```
  {
    name: "Thing to do...",
    done?: false
  }
```

- **get** /todo *(Barer Authentication)*

```
//Response
  [
    {
      id: 1,
      user_id: 1,
      name: "Thing to do...",
      done: false
    }
  ]
```

- **get** /todo/:todoId *(Barer Authentication)*

```
//Response
    {
      id: 1,
      user_id: 1,
      name: "Thing to do...",
      done: false
    }
```

- **get** /user/:userId *(Barer Authentication)*

```
//Response
  {
    dones: 2,
    notDones: 3,
    total: 5
  }
```

- **put** /todo/:todoId *(Barer Authentication)*

```
  {
    name?: "Thing to do...",
    done?: true
  }
```

- **delete** /todo/:todoId *(Barer Authentication)*
