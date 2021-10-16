const List = require("./List")

// @ponicode
describe("handleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Edmond", "Pierre Edouard"], ["Edmond", "Anas", "Edmond"], ["Jean-Philippe", "Michael", "Jean-Philippe"]]
        inst = new List.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick({ target: { type: "object", classList: { contains: () => true } }, event: { target: { classList: { contains: () => false } } }, id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleClick({ target: { type: "object", classList: { contains: () => true } }, event: { target: { classList: { contains: () => false } } }, id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleClick({ target: { type: "button", classList: { contains: () => false } }, event: { target: { classList: { contains: () => false } } }, id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleClick({ target: { type: "array", classList: { contains: () => true } }, event: { target: { classList: { contains: () => false } } }, id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleClick({ target: { type: "array", classList: { contains: () => true } }, event: { target: { classList: { contains: () => true } } }, id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleClick(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleKeyup", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Jean-Philippe", "Edmond"], ["Anas", "Jean-Philippe", "Pierre Edouard"], ["Anas", "Jean-Philippe", "Anas"]]
        inst = new List.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleKeyup({ target: { value: "elio@example.com", name: 0, classList: { contains: () => true } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleKeyup({ target: { value: "elio@example.com", name: -10, classList: { contains: () => false } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleKeyup({ target: { value: "Elio", name: "Pierre Edouard", classList: { contains: () => true } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleKeyup({ target: { value: "Dillenberg", name: 0.0, classList: { contains: () => false } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleKeyup({ target: { value: "elio@example.com", name: "search-tag", classList: { contains: () => true } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleKeyup(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("removeStudent", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Michael", "Jean-Philippe"], ["Edmond", "Michael", "Edmond"], ["Michael", "Jean-Philippe", "Pierre Edouard"]]
        inst = new List.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.removeStudent(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.removeStudent(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.removeStudent("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.removeStudent("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.removeStudent(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.removeStudent(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setAlertText", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Jean-Philippe", "Edmond"], ["George", "Michael", "Michael"], ["George", "Jean-Philippe", "Pierre Edouard"]]
        inst = new List.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.setAlertText("string")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.setAlertText("tag")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.setAlertText("number")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.setAlertText("name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.setAlertText("object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.setAlertText(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("toggleAlertShow", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "George", "George"], ["George", "Michael", "Jean-Philippe"], ["Jean-Philippe", "Pierre Edouard", "Edmond"]]
        inst = new List.default(object)
    })

    test("0", () => {
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object4 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let param1 = [object2, object3, object4]
        let callFunction = () => {
            inst.toggleAlertShow(param1, "array")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object2 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let object4 = [["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object2, object3, object4]
        let callFunction = () => {
            inst.toggleAlertShow(param1, "object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object2 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object3 = [["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object4 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object2, object3, object4]
        let callFunction = () => {
            inst.toggleAlertShow(param1, "array")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object2 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let object4 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let param1 = [object2, object3, object4]
        let callFunction = () => {
            inst.toggleAlertShow(param1, "object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object4 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"]]
        let param1 = [object2, object3, object4]
        let callFunction = () => {
            inst.toggleAlertShow(param1, "object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.toggleAlertShow(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fuseDebounce", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Pierre Edouard", "Anas"], ["Michael", "Pierre Edouard", "Pierre Edouard"], ["Anas", "George", "Jean-Philippe"]]
        inst = new List.default(object)
    })

    test("0", () => {
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object3 = [["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object4 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param2 = [object2, object3, object4]
        let callFunction = () => {
            inst.fuseDebounce(false, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object2 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object4 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let param2 = [object2, object3, object4]
        let callFunction = () => {
            inst.fuseDebounce(0, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"]]
        let object4 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param2 = [object2, object3, object4]
        let callFunction = () => {
            inst.fuseDebounce("UNLOCK TABLES;", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"]]
        let object3 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object4 = [[-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"]]
        let param2 = [object2, object3, object4]
        let callFunction = () => {
            inst.fuseDebounce("UPDATE Projects SET pname = %s WHERE pid = %s", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object2 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"]]
        let object4 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674]]
        let param2 = [object2, object3, object4]
        let callFunction = () => {
            inst.fuseDebounce("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.fuseDebounce(-Infinity, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Anas", "Pierre Edouard"], ["Edmond", "Michael", "Pierre Edouard"], ["George", "George", "Michael"]]
        inst = new List.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("arrToObj", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Michael", "Pierre Edouard"], ["Jean-Philippe", "George", "George"], ["Pierre Edouard", "Pierre Edouard", "Michael"]]
        inst = new List.default(object)
    })

    test("0", () => {
        let object2 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653]]
        let object4 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object2, object3, object4]
        let callFunction = () => {
            inst.arrToObj(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object2 = [["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"], ["foo bar", -0.353, "**text**", 4653]]
        let object4 = [["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"]]
        let param1 = [object2, object3, object4]
        let callFunction = () => {
            inst.arrToObj(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object4 = [["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object2, object3, object4]
        let callFunction = () => {
            inst.arrToObj(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object2 = [[10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653]]
        let object3 = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674]]
        let object4 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object2, object3, object4]
        let callFunction = () => {
            inst.arrToObj(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object2 = [["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674]]
        let object4 = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object2, object3, object4]
        let callFunction = () => {
            inst.arrToObj(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.arrToObj(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleTags", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Jean-Philippe", "Pierre Edouard"], ["Jean-Philippe", "Edmond", "Jean-Philippe"], ["Michael", "Jean-Philippe", "Michael"]]
        inst = new List.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleTags({ studentId: "myDIV", tag: { text: "This is a Text" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleTags({ studentId: "myDIV", tag: { text: "Hello, world!" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleTags({ studentId: "myDIV", tag: { text: "foo bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleTags({ studentId: "myDIV", tag: { text: "Foo bar" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleTags(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("removeTag", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Edmond", "Anas"], ["Jean-Philippe", "Jean-Philippe", "Michael"], ["Edmond", "George", "Jean-Philippe"]]
        inst = new List.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.removeTag({ target: { parentElement: { parentElement: { innerText: "http://placeimg.com/640/480/fashion" } } } }, 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.removeTag({ target: { parentElement: { parentElement: { innerText: "http://placeimg.com/640/480/fashion" } } } }, 12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.removeTag({ target: { parentElement: { parentElement: { innerText: "http://placeimg.com/640/480/fashion" } } } }, 987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.removeTag({ target: { parentElement: { parentElement: { innerText: "http://placeimg.com/640/480/fashion" } } } }, 56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.removeTag({ target: { parentElement: { parentElement: { innerText: "http://placeimg.com/640/480/fashion" } } } }, "a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.removeTag({}, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("addTags", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "George", "Edmond"], ["Edmond", "George", "Jean-Philippe"], ["Jean-Philippe", "Anas", "Edmond"]]
        inst = new List.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.addTags({ key: "Elio" }, { key: "Elio" }, "rebuild")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.addTags({ key: "elio@example.com" }, { key: "elio@example.com" }, "number")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.addTags({ key: "Dillenberg" }, { key: "Dillenberg" }, "build")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.addTags({ key: "Elio" }, { key: "elio@example.com" }, "array")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.addTags({ key: "Dillenberg" }, { key: "Elio" }, "rebuild")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.addTags(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("renderSource", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Michael", "Edmond"], ["George", "Pierre Edouard", "Edmond"], ["Pierre Edouard", "Edmond", "George"]]
        inst = new List.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.renderSource()
        }
    
        expect(callFunction).not.toThrow()
    })
})
