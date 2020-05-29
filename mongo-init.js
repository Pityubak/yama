db.createUser(
    {
        user: "yamaLoader",
        pwd: "broomhead",
        roles: [
            {
                role: "readWrite",
                db: "yamas"
            }
        ]
    }
);