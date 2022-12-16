const supertest = require("supertest");
const app = require("../server");
// const axios = require('axios');

// afterEach(cleanup);
/* import mockAxios from 'axios'
jest.mock('axios');
data to check the test cases
mockAxios.get.mockResolvedValue(fromData)
describe("hello", () => {
    afterEach(jest.clearAllMocks);
    test("should return a name", async () => {
      const result = await app(1);
      expect(result).toBe(100);
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
  });
test('should fetch users', () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);  
    return Users.all().then(data => expect(data).toEqual(users));
  });
test('should fetch users', () => {
    const fromData = [
        {
            "Payer_Ac": "1234567444800654",
            "Payee_Ac": "1234567444803354",
            "Amount": "129"
        }
    ]
    const resp = {data: fromData};
    axios.get.mockResolvedValue(resp);  
    return Users.all().then(data => 
    expect(data).toEqual(fromData));
}); */

/* const createUser = jest.fn()q
const getUser = jest.fn()
jest.mock('module',()=>({
    __esModule: true,                    // this makes it work
    default: jest.fn()
  })); */

/* jest.mock('axios') */
/* jest.doMock('../../index.test.js', () => {
    return {
        connectToDatabase: () => ({
            id: database.id,
            status: database.status,
            Payer_Ac: database.Payer_Ac,
            Payee_Ac: database.Payee_Ac,
            Amount: database.Amount,
        })
    };
}); */
/* const app1 = app({
    createUser,
    getUser
}) */

/* describe("POST /users", () => {
    beforeEach(() => {
        createUser.mockReset()
        createUser.mockResolvedValue(0)
    })
    describe("when passed the Array of object ", () => {

    })
}) */

const fromData = [
    {
        "Payer_Ac": "1234567444800654",
        "Payee_Ac": "1234567444803354",
        "Amount": "100"
    }
]

describe('not exist', () => {
    it('This test case passed and return 200 ', async () => {
        await supertest(app).post(`/check`).send(fromData).expect(200).expect(
            {}
        )
    })
})

const fromData1 = [
    {
        "Payer_Ac": "1234567444800654",
        "Payee_Ac": "1234567444803354",
        "Amount": "-129"
    }
]

describe('not exist', () => {
    it('This test case passed and return 200', async () => {
        await supertest(app).post(`/check`).send(fromData1).expect(200).expect([
            "Amount should be positive and greater than 0"
        ])
    })
})

const fromData2 = [

]

describe('not exist', () => {
    it('This test case passed and return 200', async () => {
        await supertest(app).post(`/check`).send(fromData2).expect(200).expect([
            "Array should not be empty"
        ])
    })
})

const fromData3 = [
    {
        "Payer_Ac": "123.4567444800654",
        "Payee_Ac": "1234567444803354",
        "Amount": "129"
    }
]

describe('not exist', () => {
    it('This test case passed and return 200', async () => {
        await supertest(app).post(`/check`).send(fromData3).expect(200).expect([
            "AC should be number", "AC should be min 16 digit"
        ])
    })
})

const fromData4 = [
    {
        "Payer_Ac": "",
        "Payee_Ac": "1234567444803354",
        "Amount": "129"
    }
]

describe('not exist', () => {
    it('This test case passed and return 200', async () => {
        await supertest(app).post(`/check`).send(fromData4).expect(200).expect([
            "Payer_Ac should be number and not empty"
        ])
    })
})

/* describe('not exist', () => {
    it('should return a 400', async () => {
        await supertest(app).post(`/check`).send(fromData).expect(200).expect([
            "Payer_Ac is required"
        ])
    })
}) */

/* describe('not exist', () => {
    it('should return a 400', async () => {
        await supertest(app).post(`/check`).send(fromData).expect(200).expect([
            "Not a safe number"
        ])
    })
}) */

/* describe('not exist', () => {
    it('should return a 400', async () => {
        await supertest(app).post(`/check`).send(fromData).expect(200).expect([
            "Payee_Ac is required"
        ])
    })
}) */

/* describe('not exist', () => {
    it('should return a 400', async () => {
        await supertest(app).post(`/check`).send(fromData).expect(200).expect([
            "Amount should not be empty"
        ])
    })
}) */

/* describe('not exist', () => {
    it('should return a 400', async () => {
        await supertest(app).post(`/check`).send(fromData).expect(200).expect([
            "Amount should be number and not empty"
        ])
    })
}) */

/* describe('not exist', () => {
    it('should return a 400', async () => {
        await supertest(app).post(`/check`).send(fromData).expect(200).expect([
            "Amount is required"
        ])
    })
}) */

/* describe('not exist', () => {
    it('should return a 400', async () => {
        await supertest(app).post(`/check`).send(fromData).expect(200).expect([
            "Other fields are not valid"
        ])
    })
}) */

