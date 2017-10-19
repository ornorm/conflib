/** @babel */
import {Properties} from 'libprops/lib/props';

let DEFAULT_CONFIG = null;
export const DEFAULT_FILENAME = "ini.properties";

export class Configuration extends Properties {

    constructor({initialCapacity = 11, loadFactor = 0.75, defaults = null} = {}) {
        super({initialCapacity,loadFactor,defaults});
    }

    getApiApplicationId() {
        return this.getProperty("api.application.id");
    }

    getApiContact() {
        return this.getProperty("api.contact");
    }

    getApiKey() {
        return this.getProperty("api.key");
    }

    getApiSecret() {
        return this.getProperty("api.secret");
    }

    getApiSenderId() {
        return parseInt(this.getProperty("api.sender.id"));
    }

    getApiUrl() {
        return this.getProperty("api.url");
    }

    getAppId() {
        return parseInt(this.getProperty("application.id").replace(/^#/, ''), 16);
    }

    getAppFile() {
        return this.getAppPath() + this.getProperty("application.file");
    }

    getAppPath() {
        return this.getPublicPath() + this.getProperty("application.path");
    }

    getAppVersionCode() {
        return parseInt(this.getProperty("application.versionCode"));
    }

    getAppVersionName() {
        return this.getProperty("application.versionName");
    }

    getConfigPath() {
        return this.getPublicPath() + this.getProperty("config.path");
    }

    getDatabaseName() {
        return this.getProperty("db.name");
    }

    getDatabaseDisplayName() {
        return this.getProperty("db.display.name");
    }

    getDatabaseMode() {
        return parseInt(this.getProperty("db.mode"));
    }

    getDatabasePath() {
        return this.getModelPath() + this.getProperty("db.path");
    }

    getDatabaseSize() {
        return parseInt(this.getProperty("db.size"));
    }

    getDatabaseType() {
        return this.getProperty("db.type");
    }

    getDatabaseVersion() {
        return parseFloat(this.getProperty("db.version"));
    }

    getCreateModelFile() {
        return this.getModelPath() + this.getProperty("create_model.file");
    }

    getDropModelFile() {
        return this.getModelPath() + this.getProperty("drop_model.file");
    }

    getEtcPath() {
        return this.getConfigPath() + this.getProperty("ect.path");
    }

    getFontsPath() {
        return this.getThemePath() + this.getProperty("fonts.path");
    }

    getFontsIconsPath() {
        return this.getFontsPath() + this.getProperty("fonts.icons.path");
    }

    getHostsFile() {
        return this.getEtcPath() + this.getProperty("hosts.file");
    }

    getI18nPath() {
        return this.getPublicPath() + this.getProperty("i18n.path");
    }

    getImgPath() {
        return this.getPublicPath() + this.getProperty("img.path");
    }

    getInstance({root="./", path="", fileName=DEFAULT_FILENAME, listener=null}={}) {
        if (DEFAULT_CONFIG === null) {
            if (listener !== null) {
                DEFAULT_CONFIG.addPropertyListener(listener);
            }
            DEFAULT_CONFIG.load(root + path + fileName);
        }
        return DEFAULT_CONFIG;
    }

    getLayoutPath() {
        return this.getPublicPath() + this.getProperty("layout.path");
    }

    getMetaInfPath() {
        return this.getPublicPath() + this.getProperty("META-INF.path");
    }

    getMimeTypeFile() {
        return this.getEtcPath() + this.getProperty("mimetype.file");
    }

    getModelPath() {
        return this.getPublicPath() + this.getProperty("model.path");
    }

    getPictosPath() {
        return this.getThemePath() + this.getProperty("pictos.path");
    }

    getPictosIconsPath() {
        return this.getPictosPath() + this.getProperty("pictos.icons.path");
    }

    getPreferencesFile() {
        return this.getConfigPath() + this.getProperty("preferences.file");
    }

    getPreferencesFileName() {
        return this.getProperty("preferences.file");
    }

    getPreferencesPath() {
        return this.getConfigPath();
    }

    getPublicPath() {
        return this.getRootPath() + this.getProperty("public.path");
    }

    getRootPath() {
        return this.getProperty("root.path", "./");
    }

    getServicesPath() {
        return this.getMetaInfPath() + this.getProperty("META-INF.services.path");
    }

    getStylesPath() {
        return this.getThemePath() + this.getProperty("styles.path");
    }

    getThemePath() {
        return this.getPublicPath() + this.getProperty("theme.path");
    }

    isDBOn() {
        return this.getProperty("db.on") === "true";
    }

    isDBOpened() {
        return this.isDBOn() && this.getProperty("db.opened") === "true";
    }

    isDBCreated() {
        return this.isDBOn() && this.getProperty("db.created") === "true";
    }

    isSQLiteDB() {
        return this.getDatabaseType() === "sqlite";
    }

    setDBClosed() {
        if (this.isDBOn()) {
            this.setProperty("db.opened", "false");
        }
    }

    setDBCreated(flag) {
        if (this.isDBOn()) {
            this.setProperty("db.created", flag ? "true" : "false");
        }
    }

    setDBOpened() {
        if (this.isDBOn()) {
            this.setProperty("db.opened", "true");
        }
    }

}