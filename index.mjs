/**
 * Made by PwLDev
 */

/**
 * Discord Epoch (January 1st 2015 0:00 UTC)
 */
const EPOCH = new Date(2015, 0, 1).valueOf();

var SEQUENCE = 1;

/**
 * Generates a Snowflake ID
 * @param {SnowflakeResolvable} timestamp Timestamp to generate snowflake
 * @param {number} shardId (Optional) Set a Shard ID
 * @returns {number} Snowflake ID
 */
const generate = (timestamp, shardId) => {
    if (
        typeof timestamp !== "string" &&
        typeof timestamp !== "number"
    ) throw new Error(`Timestamp cannot be type of ${typeof timestamp}. It has to be a type of string, or number`);

    if (typeof timestamp === "string") timestamp = parseInt(timestamp);
    if (timestamp instanceof Date) timestamp = timestamp.valueOf();
    else timestamp = new Date(timestamp).valueOf();

    if (typeof timestamp === "number" && isNaN(timestamp)) throw new Error("An invalid number or Date was provided.")

    if (!shardId) shardId = 1
    if (shardId && typeof shardId !== "number") throw new Error(`Shard ID cannot be type of ${typeof timestamp}. It has to be a type of number`);

    let result = (BigInt(timestamp) - BigInt(EPOCH)) << BigInt(22);
    result = result | (BigInt(shardId % 1024) << BigInt(12));
    result = result | BigInt(SEQUENCE++ % 4096);

    return parseInt(result.toString());
}

/**
 * Gets a Snowflake ID's generation timestamp and returns a `Date` instance.
 * @param {number | string} snowflake Snowflake ID to get information from.
 * @returns {Date} `Date` instance of timestamp.
 */
const getDate = (snowflake) => {
    if (
        typeof snowflake !== "string" &&
        typeof snowflake !== "number" &&
        snowflake instanceof Date
    ) throw new Error(`Timestamp cannot be type of ${typeof snowflake}. It has to be a type of string, or number`);

    if (typeof snowflake === "string") snowflake = parseInt(snowflake);

    const result = new Date(getTimestamp(snowflake))
    return result;
}

/**
 * Gets a Snowflake ID's Increment.
 * @param {number | string} snowflake Snowflake ID to get information from.
 * @returns {number} Increment
 */
const getIncrement = (snowflake) => {
    if (
        typeof snowflake !== "string" &&
        typeof snowflake !== "number" &&
        snowflake instanceof Date
    ) throw new Error(`Timestamp cannot be type of ${typeof snowflake}. It has to be a type of string, or number`);

    if (typeof snowflake === "string") snowflake = parseInt(snowflake);

    const result = Number(BigInt(snowflake) & BigInt(0xfff));
    return result;
}

/**
 * Gets a Snowflake's ID Process ID
 * @param {number | string} snowflake Snowflake ID to get information from.
 * @returns {number} Process ID
 */
const getProcessId = (snowflake) => {
    if (
        typeof snowflake !== "string" &&
        typeof snowflake !== "number" &&
        snowflake instanceof Date
    ) throw new Error(`Timestamp cannot be type of ${typeof snowflake}. It has to be a type of string, or number`);

    if (typeof snowflake === "string") snowflake = parseInt(snowflake);
    
    const result = Number((BigInt(snowflake) & BigInt(0x1f000)) >> BigInt(12))
    return result;
}

/**
 * Gets a Snowflake ID's generation timestamp.
 * @param {number | string} snowflake Snowflake ID to get information from.
 * @returns {number} Unix Timestamp.
 */
const getTimestamp = (snowflake) => {
    if (
        typeof snowflake !== "string" &&
        typeof snowflake !== "number" &&
        snowflake instanceof Date
    ) throw new Error(`Timestamp cannot be type of ${typeof snowflake}. It has to be a type of string, or number`);

    if (typeof snowflake === "string") snowflake = parseInt(snowflake);

    const result = Number((BigInt(snowflake) >> BigInt(22)) + BigInt(EPOCH));
    return result;
}

/**
 * Gets a Snowflake ID's Worker ID
 * @param {number | string} snowflake Snowflake ID to get information from.
 * @returns {number} Worker ID
 */
const getWorkerId = (snowflake) => {
    if (
        typeof snowflake !== "string" &&
        typeof snowflake !== "number" &&
        snowflake instanceof Date
    ) throw new Error(`Timestamp cannot be type of ${typeof snowflake}. It has to be a type of string, or number`);

    if (typeof snowflake === "string") snowflake = parseInt(snowflake);

    const result = Number((BigInt(snowflake) & BigInt(0x3e0000))) >> BigInt(17);
    return result;
}

/**
 * Get all information from a Snowflake and return it as an object
 * @param {number | string} snowflake Snowflake ID to get information from.
 * @returns {object} Object with Increment, Process ID, Timestamp and Worker ID.
 */
const parse = (snowflake) => {
    if (
        typeof snowflake !== "string" &&
        typeof snowflake !== "number"
    ) throw new Error(`Timestamp cannot be type of ${typeof snowflake}. It has to be a type of string, or number`);

    if (typeof timestamp === "number" && isNaN(timestamp)) throw new Error("An invalid number or Date was provided.")

    const result = {
        increment: getIncrement(snowflake),
        processId: getIncrement(snowflake),
        timestamp: getTimestamp(snowflake),
        workerId: getIncrement(snowflake)
    }
    return result;
}

export {
    EPOCH,
    generate,
    getDate,
    getIncrement,
    getProcessId,
    getTimestamp,
    getWorkerId,
    parse
};