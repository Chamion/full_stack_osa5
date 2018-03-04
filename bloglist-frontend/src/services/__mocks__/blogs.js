const blogs = [
    {
        "likes":5,
        "_id":"5a92d958258bd13340bbf850",
        "title":"Doot Doot",
        "author":"Mr. Skeltal",
        "url":"doot.com","user":{
            "minor":false,
            "_id":"5a92d8dd258bd13340bbf84f",
            "username":"doot",
            "name":"Mr. Skeltal"
        }
    },
    {
        "likes":2,
        "_id":"5a98425d63042633080ff6ea",
        "title":"Frontend Test",
        "author":"Tester",
        "url":"test.test",
        "user":{
            "minor":false,
            "_id":"5a92d8dd258bd13340bbf84f",
            "username":"doot",
            "name":"Mr. Skeltal"
        }
    },
    {
        "likes":3,
        "_id":"5a9842e663042633080ff6eb",
        "title":"AAAAAAAA",
        "author":"aaaaaaaaa",
        "url":"AAAAAAAA",
        "user":{
            "minor":false,
            "_id":"5a92d8dd258bd13340bbf84f",
            "username":"doot",
            "name":"Mr. Skeltal"
        }
    },
    {
        "likes":4,"_id":"5a98437163042633080ff6ed",
        "title":"CCCCCCCCC",
        "author":"ccccccccccc",
        "url":"CCCCCCCCCCCC",
        "user":{
            "minor":false,
            "_id":"5a92d8dd258bd13340bbf84f",
            "username":"doot",
            "name":"Mr. Skeltal"
        }
    },
    {
        "likes":0,
        "_id":"5a9ab9c5dd78c01b143eed14",
        "title":"Testaajan testi",
        "author":"testaaja",
        "url":"test.twwest",
        "user":{
            "minor":false,
            "_id":"5a930c3cc416552f9c1a2b5c",
            "username":"test","name":"adsgfh"
        }
    },
    {
        "likes":0,
        "_id":"5a9abceedd78c01b143eed15",
        "title":"test",
        "author":"testtest",
        "url":"test.test.test",
        "user":{
            "minor":false,
            "_id":"5a930c3cc416552f9c1a2b5c",
            "username":"test",
            "name":"adsgfh"
        }
    }
]

const getAll = () => {
  return blogs
}

const addNew = (blog, user) => {
    return blog
}

const update = (blog, id) => {
    return blog
}

const remove = (user, id) => {
    return {}
}

export default {
    getAll,
    addNew,
    update,
    remove,
    blogs
}
