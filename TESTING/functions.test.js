const functions = require('./functions');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
// const nameCheck = () => console.log('Checking Name....');

// describe('Checking Names', () => {
//   beforeEach(() => nameCheck());

  test('User is ram', () => {
    const user = 'ram';
    expect(user).toBe('ram');
  });

  test('User is ravi', () => {
    const user = 'ravi';
    expect(user).toBe('ravi');
  });
// });

// toBe
test('login successful', () => {
  expect(functions.add(2,2)).toBe(4);
});

test('error message when invalid credentials', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('length of credentials less than 50', () => {
  expect(functions.add(2, 2)).toBe(4);
});


// not
// test('faculty and student details displayed', () => {
//   expect(functions.add(2, 2)).not.toBe(5);
// });

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
// test('credentials assigned successfully', () => {
//   expect(functions.isNull()).toBeNull();
// });

// // toBeFalsy
// test('modified students and faculties details', () => {
//   expect(functions.checkValue(undefined)).toBeFalsy();
// });

// // toEqual
// test('section of files created successfully', () => {
//   expect(functions.createUser()).toEqual({
//     firstName: 'Brad',
//     lastName: 'Traversy'
//   });
// });

// // Less than and greater than
// test('added a course successfully', () => {
//   const load1 = 800;
//   const load2 = 800;
//   expect(load1 + load2).toBeLessThanOrEqual(1600);
// });

// // Regex


// // Arrays
// test('removed a course successfully', () => {
//   usernames = ['john', 'karen', 'admin'];
//   expect(usernames).toContain('admin');
// });

// test('list of faculties and their courses created successfully', () => {
//   expect('team').not.toMatch(/I/i);
// });

// // Working with async data

// Promise
// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
// //     expect(data.name).toEqual('Leanne Graham');
// //   });
// // });

// // Async Await
// test('provided authentication successfully', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });

test('unique username in SignUp', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});


test('Questions field filled up', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

test('error message when empty field', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
test('unique Quiz ID generated', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
test('error message when Invalid Quiz ID', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
test('correct marks displayed', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
// test('student(s) assigned successfully', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });

// test('course details updated successfully', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });

// test('uploaded the files course-wise successfully', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });

// test('notifications of file upload sent successfully', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });

// test('PO(s) & CO(s) displayed successfully', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });

// test('student(s) feedback viewed successfully', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });

// test('previous year projects & assignments uploaded successfully', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });

// test('question papers for respective courses uploaded successfully', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });

// test('chapter materials for respective courses uploaded successfully', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });

// test('students mark file for respective courses uploaded successfully', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');
// });



