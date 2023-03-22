declare module "@pwldev/discord-snowflake" {
    interface ParsedSnowflake {
        increment: number,
        processId: number,
        timestamp: number,
        workerId: number
    };
    
    type Snowflake = number | string;
    type SnowflakeResolvable = Snowflake | Date;

    /**
     * Discord Epoch (January 1st 2015 0:00 UTC)
     */
    const EPOCH: number;

    /**
     * Generates a Snowflake ID
     * @param {SnowflakeResolvable} timestamp Timestamp to generate snowflake
     * @param {number} shardId (Optional) Set a Shard ID
     * @returns {number} Snowflake ID
     */
    function generate(timestamp: SnowflakeResolvable, shardId?: number): number;

    /**
     * Gets a Snowflake ID's generation timestamp and returns a `Date` instance.
     * @param {Snowflake} snowflake Snowflake ID to get information from.
     * @returns {Date} `Date` instance of timestamp.
     */
    function getDate(snowflake: Snowflake): Date;

    /**
     * Gets a Snowflake ID's Increment.
     * @param {Snowflake} snowflake Snowflake ID to get information from.
     * @returns {number} Increment
     */
    function getIncrement(snowflake: Snowflake): number;
    
    /**
     * Gets a Snowflake's ID Process ID
     * @param {Snowflake} snowflake Snowflake ID to get information from.
     * @returns {number} Process ID
     */
    function getProcessId(snowflake: Snowflake): number;

    /**
     * Gets a Snowflake ID's generation timestamp.
     * @param {Snowflake} snowflake Snowflake ID to get information from.
     * @returns {number} Unix Timestamp.
     */
    function getTimestamp(snowflake: Snowflake): number;

    /**
     * Gets a Snowflake ID's Worker ID
     * @param {Snowflake} snowflake Snowflake ID to get information from.
     * @returns {number} Worker ID
     */
    function getWorkerId(snowflake: Snowflake): number;

    /**
     * Get all information from a Snowflake and return it as an object
     * @param {Snowflake} snowflake Snowflake ID to get information from.
     * @returns {ParsedSnowflake} Object with Increment, Process ID, Timestamp and Worker ID.
     */
    function parse(snowflake: Snowflake): ParsedSnowflake;
}