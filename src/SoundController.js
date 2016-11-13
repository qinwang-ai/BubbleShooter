/**
 * Created by Tsunami on 12/11/2016.
 */
import AudioManager;
exports.sound = null;
exports.getSound = function () {
    if (!exports.sound) {
        exports.sound = new AudioManager({
            path: 'resources/sounds',
            files: {
                main_music: {
                    path: 'music',
                    background: true,
                },
                bg_music: {
                    path: 'music',
                    background: true,
                },
                start_ready: {
                    path: 'effect',
                    background: false
                },
                start_go: {
                    path: 'effect',
                    background: false
                },
                lightning: {
                    path: 'effect',
                    background: false
                },
                attack: {
                    path: 'effect',
                    background: false
                },
                bubble_xiaochu: {
                    path: 'effect',
                    background: false
                },
                coin_in: {
                    path: 'effect',
                    background: false
                },
                great: {
                    path: 'effect',
                    background: false
                },
                nice: {
                    path: 'effect',
                    background: false
                },
                perfect: {
                    path: 'effect',
                    background: false
                },
                lose: {
                    path: 'effect',
                    background: false
                },
                win: {
                    path: 'effect',
                    background: false
                }
            }
        });
    }
    return exports.sound;
}