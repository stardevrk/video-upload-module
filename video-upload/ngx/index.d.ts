import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
/**
 * Options for the video recording & upload feature.
 */
export interface UploadOptions {
    /**
     * AWS Cognito Pool ID
     */
    poolID: string;
    /**
     * AWS bucket and cognito pool id region. they should be same.
     */
    region: string;
    /**
     * AWS bucket name where video is uploaded to.
     */
    bucket: string;
    /**
     * Folder name in the AWS bucket.
     */
    folder: string;
    /**
     * camera preview options - width, height.
     */
    cameraWidth: number;
    cameraHeight: number;
}
/**
 * Options for the live stream
 */
export interface LiveOptions {
    /**
     * camera preview options - width, height.
     */
    cameraWidth: number;
    cameraHeight: number;
}
/**
 * @name Video Upload
 * @description
 * A Cordova plugin that simply allows you to record and upload a video to your AWS bucket.
 * And this plugin works as a live stream broadcaster to your rtmp end point.
 *
 * @usage
 * ```typescript
 * import { VideoUpload } from '@ionic-native/video-upload';
 *
 *
 * constructor(private videoUpload: VideoUpload) { }
 *
 * ...
 *
 *
 * this.videoUpload.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class VideoUpload extends IonicNativePlugin {
    /**
     * Initialize the plugin with the upload feature
     * @param uploadOptions {UploadOptions} Video Upload Plugin feature setting options. All are required.
     */
    init(uploadOptions: UploadOptions): void;
    /**
     * Start the video upload plugin
     * @param pluginType {string} Video Upload Plugin feature setting options. All are required.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    startUpload(pluginType: string, progressListener: (result: any) => {}): Promise<any>;
    /**
     * Initialize the live stream plugin
     * @param options {LiveOptions} live stream broadcaster feature camera preview options. All are required.
     */
    initLive(options: LiveOptions): void;
    /**
     * Start live stream plugin
     * @param rtmpEndpoint {string} live stream endpoint that you will send the RTMP to.
     */
    startBroadcast(rtmpEndpoint: string): void;
    /**
     * Get notified when the screen is captured
     * @returns {Observable<any>} Returns an observable.
     */
    subscribeCaptured(): Observable<any>;
    /**
     * Get notified when the screen is captured
     * @returns {Observable<any>} Returns an observable.
     */
    unsubscribeCaptured(): Observable<any>;
    /**
     * Start the video upload plugin
     * @param pluginType {string} Video Upload Plugin feature setting options. All are required.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getCapturing(): Promise<any>;
}
