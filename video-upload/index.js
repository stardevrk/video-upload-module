var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var VideoUploadOriginal = /** @class */ (function (_super) {
    __extends(VideoUploadOriginal, _super);
    function VideoUploadOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoUploadOriginal.prototype.init = function (uploadOptions) { return cordova(this, "init", { "sync": true }, arguments); };
    VideoUploadOriginal.prototype.startUpload = function (pluginType) { return cordova(this, "startUpload", {}, arguments); };
    VideoUploadOriginal.prototype.initLive = function (options) { return cordova(this, "initLive", { "sync": true }, arguments); };
    VideoUploadOriginal.prototype.startBroadcast = function (rtmpEndpoint) { return cordova(this, "startBroadcast", { "sync": true }, arguments); };
    VideoUploadOriginal.prototype.subscribeCaptured = function () { return cordova(this, "subscribeCaptured", { "eventObservable": true, "event": "captured", "element": "document" }, arguments); };
    VideoUploadOriginal.pluginName = "VideoUpload";
    VideoUploadOriginal.plugin = "https://github.com/stardevrk/cordova-plugin-video-upload-aws.git";
    VideoUploadOriginal.pluginRef = "VideoUpload";
    VideoUploadOriginal.repo = "https://github.com/stardevrk/cordova-plugin-video-upload-aws";
    VideoUploadOriginal.platforms = ["iOS"];
    return VideoUploadOriginal;
}(IonicNativePlugin));
var VideoUpload = new VideoUploadOriginal();
export { VideoUpload };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3ZpZGVvLXVwbG9hZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyw4QkFBMEYsTUFBTSxvQkFBb0IsQ0FBQztBQUM1SCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXNFRCwrQkFBaUI7Ozs7SUFPaEQsMEJBQUksYUFBQyxhQUE0QjtJQVFqQyxpQ0FBVyxhQUFDLFVBQWtCO0lBUzlCLDhCQUFRLGFBQUMsT0FBb0I7SUFPN0Isb0NBQWMsYUFBQyxZQUFvQjtJQVduQyx1Q0FBaUI7Ozs7OztzQkE3SG5CO0VBbUZpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHRoZSB2aWRlbyByZWNvcmRpbmcgJiB1cGxvYWQgZmVhdHVyZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRPcHRpb25zIHtcbiAgLyoqXG4gICAqIEFXUyBDb2duaXRvIFBvb2wgSURcbiAgICovXG4gIHBvb2xJRDogc3RyaW5nLFxuICAvKipcbiAgICogQVdTIGJ1Y2tldCBhbmQgY29nbml0byBwb29sIGlkIHJlZ2lvbi4gdGhleSBzaG91bGQgYmUgc2FtZS5cbiAgICovXG4gIHJlZ2lvbjogc3RyaW5nLFxuICAvKipcbiAgICogQVdTIGJ1Y2tldCBuYW1lIHdoZXJlIHZpZGVvIGlzIHVwbG9hZGVkIHRvLlxuICAgKi9cbiAgYnVja2V0OiBzdHJpbmcsXG4gIC8qKlxuICAgKiBGb2xkZXIgbmFtZSBpbiB0aGUgQVdTIGJ1Y2tldC5cbiAgICovXG4gIGZvbGRlcjogc3RyaW5nLFxuICAvKipcbiAgICogY2FtZXJhIHByZXZpZXcgb3B0aW9ucyAtIHdpZHRoLCBoZWlnaHQuXG4gICAqL1xuICBjYW1lcmFXaWR0aDogbnVtYmVyLFxuICBjYW1lcmFIZWlnaHQ6IG51bWJlclxufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHRoZSBsaXZlIHN0cmVhbVxuICovXG5leHBvcnQgaW50ZXJmYWNlIExpdmVPcHRpb25zIHtcbiAgLyoqXG4gICAqIGNhbWVyYSBwcmV2aWV3IG9wdGlvbnMgLSB3aWR0aCwgaGVpZ2h0LlxuICAgKi9cbiAgY2FtZXJhV2lkdGg6IG51bWJlcixcbiAgY2FtZXJhSGVpZ2h0OiBudW1iZXJcbn1cblxuLyoqXG4gKiBAbmFtZSBWaWRlbyBVcGxvYWRcbiAqIEBkZXNjcmlwdGlvblxuICogQSBDb3Jkb3ZhIHBsdWdpbiB0aGF0IHNpbXBseSBhbGxvd3MgeW91IHRvIHJlY29yZCBhbmQgdXBsb2FkIGEgdmlkZW8gdG8geW91ciBBV1MgYnVja2V0LlxuICogQW5kIHRoaXMgcGx1Z2luIHdvcmtzIGFzIGEgbGl2ZSBzdHJlYW0gYnJvYWRjYXN0ZXIgdG8geW91ciBydG1wIGVuZCBwb2ludC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFZpZGVvVXBsb2FkIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS92aWRlby11cGxvYWQnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZGVvVXBsb2FkOiBWaWRlb1VwbG9hZCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMudmlkZW9VcGxvYWQuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdWaWRlb1VwbG9hZCcsXG4gIHBsdWdpbjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zdGFyZGV2cmsvY29yZG92YS1wbHVnaW4tdmlkZW8tdXBsb2FkLWF3cy5naXQnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnVmlkZW9VcGxvYWQnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc3RhcmRldnJrL2NvcmRvdmEtcGx1Z2luLXZpZGVvLXVwbG9hZC1hd3MnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmlkZW9VcGxvYWQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIHBsdWdpbiB3aXRoIHRoZSB1cGxvYWQgZmVhdHVyZVxuICAgKiBAcGFyYW0gdXBsb2FkT3B0aW9ucyB7VXBsb2FkT3B0aW9uc30gVmlkZW8gVXBsb2FkIFBsdWdpbiBmZWF0dXJlIHNldHRpbmcgb3B0aW9ucy4gQWxsIGFyZSByZXF1aXJlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBpbml0KHVwbG9hZE9wdGlvbnM6IFVwbG9hZE9wdGlvbnMpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSB2aWRlbyB1cGxvYWQgcGx1Z2luXG4gICAqIEBwYXJhbSBwbHVnaW5UeXBlIHtzdHJpbmd9IFZpZGVvIFVwbG9hZCBQbHVnaW4gZmVhdHVyZSBzZXR0aW5nIG9wdGlvbnMuIEFsbCBhcmUgcmVxdWlyZWQuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0YXJ0VXBsb2FkKHBsdWdpblR5cGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBsaXZlIHN0cmVhbSBwbHVnaW5cbiAgICogQHBhcmFtIG9wdGlvbnMge0xpdmVPcHRpb25zfSBsaXZlIHN0cmVhbSBicm9hZGNhc3RlciBmZWF0dXJlIGNhbWVyYSBwcmV2aWV3IG9wdGlvbnMuIEFsbCBhcmUgcmVxdWlyZWQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgaW5pdExpdmUob3B0aW9uczogTGl2ZU9wdGlvbnMpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IGxpdmUgc3RyZWFtIHBsdWdpblxuICAgKiBAcGFyYW0gcnRtcEVuZHBvaW50IHtzdHJpbmd9IGxpdmUgc3RyZWFtIGVuZHBvaW50IHRoYXQgeW91IHdpbGwgc2VuZCB0aGUgUlRNUCB0by5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdGFydEJyb2FkY2FzdChydG1wRW5kcG9pbnQ6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IG5vdGlmaWVkIHdoZW4gdGhlIHNjcmVlbiBpcyBjYXB0dXJlZFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnY2FwdHVyZWQnLFxuICAgIGVsZW1lbnQ6IGRvY3VtZW50LFxuICB9KVxuICBzdWJzY3JpYmVDYXB0dXJlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=