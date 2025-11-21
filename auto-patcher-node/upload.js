import { BoxClient } from 'box-node-sdk/sdk-gen';
import { BoxCcgAuth, CcgConfig } from 'box-node-sdk/sdk-gen/box';

const ccgConfig = new CcgConfig({
  userId: process.env.USER_ID,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});
const ccgAuth = new BoxCcgAuth({ config: ccgConfig });
const client = new BoxClient({ auth: ccgAuth });

const me = await client.users.getUserMe();
console.log(`My user ID is ${me.id}`);