export interface Agent {
    isAuthoritative: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isiPad: boolean;
    isiPod: boolean;
    isiPhone: boolean;
    isAndroid: boolean;
    isBlackberry: boolean;
    isOpera: boolean;
    isIE: boolean;
    isEdge: boolean;
    isIECompatibilityMode: boolean;
    isSafari: boolean;
    isFirefox: boolean;
    isWebkit: boolean;
    isChrome: boolean;
    isKonqueror: boolean;
    isOmniWeb: boolean;
    isSeaMonkey: boolean;
    isFlock: boolean;
    isAmaya: boolean;
    isPhantomJS: boolean;
    isEpiphany: boolean;
    isDesktop: boolean;
    isWindows: boolean;
    isLinux: boolean;
    isLinux64: boolean;
    isMac: boolean;
    isWindowsPhone: boolean;
    isChromeOS: boolean;
    isBada: boolean;
    isSamsung: boolean;
    isRaspberry: boolean;
    isBot: boolean;
    isCurl: boolean;
    isAndroidTablet: boolean;
    isWinJs: boolean;
    isKindleFire: boolean;
    isSilk: boolean;
    isCaptive: boolean;
    isSmartTV: boolean;
    isUC: boolean;
    isTouchScreen: boolean;
    silkAccelerated: boolean;
    colorDepth: number;
    pixelDepth: number;
    resolution: number[];
    cpuCores: number;
    language: string;
    browser: string;
    version: string;
    os: string;
    platform: string;
    geoIp: {
        [key: string]: string;
    };
    source: string;
    hashInt: (string: string) => number;
    hashMD5: (string: string) => string;
}
interface DeviceUUIDOptions {
    version?: boolean;
    language?: boolean;
    platform?: boolean;
    os?: boolean;
    pixelDepth?: boolean;
    colorDepth?: boolean;
    resolution?: boolean;
    isAuthoritative?: boolean;
    silkAccelerated?: boolean;
    isKindleFire?: boolean;
    isDesktop?: boolean;
    isMobile?: boolean;
    isTablet?: boolean;
    isWindows?: boolean;
    isLinux?: boolean;
    isLinux64?: boolean;
    isChromeOS?: boolean;
    isMac?: boolean;
    isiPad?: boolean;
    isiPhone?: boolean;
    isiPod?: boolean;
    isAndroid?: boolean;
    isSamsung?: boolean;
    isSmartTV?: boolean;
    isRaspberry?: boolean;
    isBlackberry?: boolean;
    isTouchScreen?: boolean;
    isOpera?: boolean;
    isIE?: boolean;
    isEdge?: boolean;
    isIECompatibilityMode?: boolean;
    isSafari?: boolean;
    isFirefox?: boolean;
    isWebkit?: boolean;
    isChrome?: boolean;
    isKonqueror?: boolean;
    isOmniWeb?: boolean;
    isSeaMonkey?: boolean;
    isFlock?: boolean;
    isAmaya?: boolean;
    isPhantomJS?: boolean;
    isEpiphany?: boolean;
    source?: boolean;
    cpuCores?: boolean;
}
declare class DeviceUUID {
    options: DeviceUUIDOptions;
    version: string;
    _Versions: {
        [key: string]: RegExp;
    };
    _Browsers: {
        [key: string]: RegExp;
    };
    _OS: {
        [key: string]: RegExp;
    };
    _Platform: {
        [key: string]: RegExp;
    };
    DefaultAgent: Agent;
    Agent: Agent;
    userAgent: string;
    constructor(userAgent: string, options?: DeviceUUIDOptions);
    getBrowser(string: string): string;
    getBrowserVersion(string: string): string;
    getOS(string: string): string;
    getPlatform(string: string): "unknown" | "Linux" | "Wii" | "Playstation" | "Curl" | "Microsoft Windows" | "Microsoft Windows Phone" | "Apple Mac" | "Android" | "Blackberry" | "iPad" | "iPod" | "iPhone" | "Samsung";
    testCompatibilityMode(): void;
    testSilk(): false | "Silk";
    testKindleFire(): false | "Kindle Fire" | "Kindle Fire HD" | "Kindle Fire HD 8.9" | "Kindle Fire HD 8.9 4G" | "Kindle Fire HD 7" | "Kindle Fire HDX 7" | "Kindle Fire HDX 7 4G" | "Kindle Fire HDX 8.9" | "Kindle Fire HDX 8.9 4G";
    testCaptiveNetwork(): false | "CaptiveNetwork";
    testMobile(): void;
    testTablet(): void;
    testNginxGeoIP(headers: {
        [key: string]: string;
    }): void;
    testBot(): void;
    testSmartTV(): void;
    testAndroidTablet(): void;
    testTouchSupport(): void;
    getLanguage(): void;
    getColorDepth(): void;
    getScreenResolution(): void;
    getPixelDepth(): void;
    getCPU(): void;
    reset(): this;
    parse(source?: string): Agent;
    get(customData?: string): string;
}
export { DeviceUUID };
declare const _default: DeviceUUID;
export default _default;
