const search = require("./index")

const mockDb = ["bluebird2", "bluelake2", "blueriver2", "bluesky2", "bluefire2", "redbird2", "redlake2", "redriver2"]

it("This is my first test", () => {
    expect("hello").toEqual("hello")
    search(mockDb, "blue")
})

it("Search with empty result", () => {
    expect(search(mockDb, "zzz")).toEqual([])
    
})

it("Real search with keyword", () => {
    expect(search(mockDb, "blue")).toEqual(["bluebird2", "bluelake2", "blueriver2", "bluesky2", "bluefire2"])
    
})