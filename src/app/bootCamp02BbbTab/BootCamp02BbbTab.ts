import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/bootCamp02BbbTab/index.html")
@PreventIframe("/bootCamp02BbbTab/config.html")
@PreventIframe("/bootCamp02BbbTab/remove.html")
export class BootCamp02BbbTab {
}
