// - Supported YouTube URL formats:
//   - http://www.youtube.com/watch?v=My2FRPA3Gf8
//   - http://youtu.be/My2FRPA3Gf8
//   - https://youtube.googleapis.com/v/My2FRPA3Gf8
// - Supported Vimeo URL formats:
//   - http://vimeo.com/25451551
//   - http://player.vimeo.com/video/25451551
// - Also supports relative URLs:
//   - //player.vimeo.com/video/25451551

export const parseVideo = url => {
  if (!url) return null
  url.match(
    /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\S+)?/
  )
  var type

  if (RegExp.$3.indexOf(`youtu`) > -1) {
    type = `youtube`
  } else if (RegExp.$3.indexOf(`vimeo`) > -1) {
    type = `vimeo`
  }

  return {
    type: type,
    id: RegExp.$6,
  }
}

export default parseVideo
