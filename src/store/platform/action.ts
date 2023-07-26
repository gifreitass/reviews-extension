export const setPlatformAction = (platformInformation: string) => {
    return {
        type: "SET_PLATFORM_NAME",
        payload: platformInformation
    }
}