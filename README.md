# **Discord Snowflake**
An easy to use package to generate, parse and do more with Discord Snowflake IDs.
<hr>

## **Installation**
To install this package with NPM use the command:
```
npm install @pwldev/discord-snowflake
```
This is a hybrid package, so you can import it both ways
```js
import * as Snowflake from "@pwldev/snowflake";
const SnowflakeManager = require("@pwldev/snowflake");
```
<hr>

## **Methods**

<hr>

### **generate**
Generates a Snowflake ID using a Unix Timestamp or Date instance.
```js
import * as Snowflake from "@pwldev/snowflake";

const newSnowflake = Snowflake.generate(1679460085433);
console.log(newSnowflake);

// 1087853498709577700
```

### **getDate**
Gets a Snowflake ID's timestamp as a Date instance
```js
import * as Snowflake from "@pwldev/snowflake";

Snowflake.getDate(1087853498709577700)
// Date
```

### **getIncrement**
Gets a Snowflake ID's increment
```js
import * as Snowflake from "@pwldev/snowflake";

Snowflake.getIncrement(1087853498709577700)
// 3769
```

### **getProcessId**
Gets a Snowflake ID's Process ID
```js
import * as Snowflake from "@pwldev/snowflake";

Snowflake.getProcessId(1087853498709577700)
// 3769
```

### **getTimestamp**
Gets a Snowflake ID's Unix Timestamp
```js
import * as Snowflake from "@pwldev/snowflake";

Snowflake.getTimestamp(1087853498709577700)
// 1087853498709577700
```

### **getWorkerId**
Gets a Snowflake ID's Worker ID
```js
import * as Snowflake from "@pwldev/snowflake";

Snowflake.getWorkerId(1087853498709577700)
// 3769
```
### **parse**
Gets all information at once from a Snowflake ID
```js
import * as Snowflake from "@pwldev/snowflake";

Snowflake.parse(1087853498709577700)
// { "increment": 3769, "processId": 3769, "timestamp": 1420096000414, "workerId": 3769 }
```

<br>

## **Links**

Created by [PwLDev](https://github.com/PwLDev/)
<br>
Based on the [official Discord API docs](https://discord.dev).