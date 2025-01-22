(function(){
    var script = {
 "mouseWheelEnabled": true,
 "verticalAlign": "top",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Image_9194E92A_8C0F_565B_41D3_236046784B7C",
  "this.Image_91E16A83_8C0B_CA49_41DD_8A1AA88254D7",
  "this.Container_A9D0C119_8C0B_B646_41D8_01838B21DA87",
  "this.Label_97591067_8D3C_5A7B_41C9_023909B4D215",
  "this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE",
  "this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B",
  "this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29",
  "this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B",
  "this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2",
  "this.Label_960AE679_8D0C_4654_41E0_13C0164AE489",
  "this.Label_91245760_8D0C_4674_41E1_819C525ED2B6",
  "this.Image_8035FC4A_8E9A_259E_41C8_DE1B1FE2C7B1"
 ],
 "minWidth": 20,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "start": "this.playAudioList([this.audio_90740B8F_8C0B_4A59_41D6_852554C921C8]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_81572D86_8E5C_D19D_41D8_88393CDDC4D9], 'cardboardAvailable'); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_9AC6CA2C_8EA6_ED9A_41DB_B6F3D361F6A1.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_80B094D1_8E5C_F7B7_41E1_9309E37AB7C3,this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "mobileMipmappingEnabled": false,
 "defaultVRPointer": "laser",
 "scripts": {
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "existsKey": function(key){  return key in window; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "buttonToggleFullscreen": [
  "this.IconButton_80B094D1_8E5C_F7B7_41E1_9309E37AB7C3",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadow": false,
 "layout": "absolute",
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "class": "Player",
 "borderRadius": 0,
 "overflow": "visible",
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 13.52,
  "class": "PanoramaCameraPosition",
  "pitch": -0.32
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -13.67,
   "yaw": 40.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A76A0622_8D74_59F5_416E_36630276E68C"
  }
 ],
 "hfov": 360,
 "label": "Aula 2",
 "id": "panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436",
 "thumbnailUrl": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_A3248498_8D0C_DAD5_41C3_34B7A750DCB8"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_camera"
},
{
 "items": [
  {
   "media": "this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_91D0890C_88D6_E89F_41BB_A2F05281772E",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7F8496B_8C15_F6D9_41C3_93D586540138",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A76A0622_8D74_59F5_416E_36630276E68C",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "camera": "this.panorama_A76A0622_8D74_59F5_416E_36630276E68C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.video_90EACF8E_8C34_CA5A_41C7_255144D12B1E",
   "start": "this.viewer_uidA44E627D_8C35_DAB9_41E1_0B8C4A60764AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_9AC70A2C_8EA6_ED9A_41C8_A41E140D2E59, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_9AC70A2C_8EA6_ED9A_41C8_A41E140D2E59, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidA44E627D_8C35_DAB9_41E1_0B8C4A60764AVideoPlayer)",
   "player": "this.viewer_uidA44E627D_8C35_DAB9_41E1_0B8C4A60764AVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_9AC70A2C_8EA6_ED9A_41C8_A41E140D2E59",
 "class": "PlayList"
},
{
 "gyroscopeEnabled": true,
 "buttonCardboardView": [
  "this.IconButton_81572D86_8E5C_D19D_41D8_88393CDDC4D9",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -7.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9A484A99_8EA6_E2BA_41DB_2BFD5568E393"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -169.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9B93EACA_8EA6_E29E_41C0_C3A645D3EB1B"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -44.53,
   "yaw": -130.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B"
  }
 ],
 "hfov": 360,
 "label": "StudentCorner_2",
 "id": "panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C",
 "thumbnailUrl": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9899F433_8C17_BE4A_41C0_1A5BEFF017F6"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -147.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9B3C7B06_8EA6_E397_41D4_C72378871682"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 23.3,
   "yaw": 46.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F"
  },
  {
   "backwardYaw": -142.1,
   "yaw": 25.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD"
  },
  {
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 10.37,
   "yaw": 32.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC"
  }
 ],
 "hfov": 360,
 "label": "Lift",
 "id": "panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
 "thumbnailUrl": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9CE0D7B9_8D0D_C6D7_41E0_6372FC858E42",
  "this.overlay_AD8AC070_8D0C_FA55_41D8_758ABA163999",
  "this.overlay_AD8A2070_8D0C_FA55_4186_2A66A2638B1C",
  "this.overlay_AD8A0070_8D0C_FA55_41E0_18ED14FDE4CB",
  "this.overlay_AD8A1070_8D0C_FA55_41D3_2CB4B5F7D4A4",
  "this.overlay_AD8A4070_8D0C_FA55_41D6_A4590EB43CAD",
  "this.overlay_AD8DA070_8D0C_FA55_41DD_00621318A491",
  "this.overlay_AD8D8070_8D0C_FA55_41D3_C34B38026317"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 135.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": -18.5,
    "yawSpeed": 3.72,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": -323,
    "yawSpeed": 3.72,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": -18.5,
    "yawSpeed": 3.72,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9CA83BE1_8EA6_E28A_41D2_B727A1A9E633"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -156.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9B1A5B19_8EA6_E3BA_41C3_2C3F5CC65D55"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 103.95,
  "class": "PanoramaCameraPosition",
  "pitch": 6.77
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 49.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9F1CCB98_8EA6_E2BA_41DD_DFCFB8AD7842"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 17.26,
  "class": "PanoramaCameraPosition",
  "pitch": -2.88
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -69.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -139.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9F6A7BAA_8EA6_E29E_41DF_6B978EC6ECA7"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 118.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9F63CB9E_8EA6_E2B6_41DF_58A9BCA2F7D9"
},
{
 "easing": "linear",
 "id": "effect_A2D2F0AA_8D74_DAF5_41C0_FD150229F63E",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -154.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9B837ABE_8EA6_E2F6_41BB_43CC4DA03AAE"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -105.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9CBC3BF3_8EA6_E28E_41D6_2215CDD8A93E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_camera"
},
{
 "easing": "linear",
 "id": "effect_A2CEC0AA_8D74_DAF5_41DC_A46FDC661A04",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -50.1,
  "class": "PanoramaCameraPosition",
  "pitch": 2.47
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -69.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9BF13ADC_8EA6_E2BA_41B3_6358F6EFA74C"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -120.18,
   "yaw": 23.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD"
  },
  {
   "backwardYaw": 124.11,
   "yaw": -61.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A76A0622_8D74_59F5_416E_36630276E68C"
  },
  {
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 46.63,
   "yaw": 23.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7"
  },
  {
   "backwardYaw": 46.63,
   "yaw": 30.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7"
  },
  {
   "backwardYaw": 32.52,
   "yaw": 30.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC"
  }
 ],
 "hfov": 360,
 "label": "Aula 1",
 "id": "panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F",
 "thumbnailUrl": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_BD2C00DB_8D74_DA54_41E0_57ACC01036AD",
  "this.overlay_BD2C20DB_8D74_DA54_41AA_C0A6AFD38C6E",
  "this.overlay_BD2C70DB_8D74_DA54_41D0_D3677FAAA270",
  "this.overlay_BD2BB0DB_8D74_DA54_41A6_0DD97F08640E",
  "this.overlay_BD2BA0DB_8D74_DA54_41D7_D6DB9C323618",
  "this.overlay_BD2BE0DB_8D74_DA54_41DF_3BE3E8086BA7",
  "this.overlay_BD2B00DB_8D74_DA54_41D7_D579A58BFC5A",
  "this.overlay_BC69C1C2_8D0C_BAB4_41E0_E5FBCD8040C0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -156.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9A58DAA5_8EA6_E295_41D1_F56D739E91B4"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -169.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9F0F2B7A_8EA6_E27E_41D7_B1AB6B934146"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.9,
   "yaw": 36.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A"
  },
  {
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "Ruang Lab",
 "id": "panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1",
 "thumbnailUrl": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9FC84D6F_8D14_4A4B_41D5_7683C98ED125",
  "this.overlay_9ED6FC8A_8D14_CAB5_41B7_7EF043DCC4D6"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.14,
   "yaw": -3.65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926"
  }
 ],
 "hfov": 360,
 "label": "Ruang Dosen 2",
 "id": "panorama_A7F8496B_8C15_F6D9_41C3_93D586540138",
 "thumbnailUrl": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0_t.jpg",
   "overlays": [
    "this.overlay_9C3F52BB_8CF4_5ED4_41D4_1CA2F98C3569"
   ]
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 23.28,
   "yaw": -120.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F"
  },
  {
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 12.24,
   "yaw": 150.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713"
  },
  {
   "backwardYaw": 25.08,
   "yaw": -142.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7"
  },
  {
   "backwardYaw": 25.08,
   "yaw": -134.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7"
  },
  {
   "backwardYaw": 10.55,
   "yaw": -134.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC"
  }
 ],
 "hfov": 360,
 "label": "Ruang Tunggu",
 "id": "panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD",
 "thumbnailUrl": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_t.jpg",
   "overlays": [
    "this.overlay_96CB866B_8D34_464B_41D2_9269E55BBAD5"
   ]
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_996EE68C_8C0B_DA5F_41DF_18DD9462CA9A",
  "this.overlay_981EE3E0_8D14_BE75_41D6_19FD01ACEF7C",
  "this.overlay_91AAD47E_8D0C_DA4D_4187_A02F5EF0E210",
  "this.overlay_9073F775_8D14_C65F_41D7_A101ECE54689",
  "this.overlay_935A69FB_8D14_4A4B_41C1_6BCDF68147ED",
  "this.overlay_93592A9B_8D14_4ECB_41D5_FDCEBAF67DA9",
  "this.overlay_90DD89CA_8D15_CAB4_41CD_9E5E946EBC5D"
 ]
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_9B4BFFE2_8D14_C675_41C3_CD2DC22C82C1",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_9AC6CA2C_8EA6_ED9A_41DB_B6F3D361F6A1",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 39.54,
  "class": "PanoramaCameraPosition",
  "pitch": -1.88
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9CB15BE7_8EA6_E296_41CD_6C941365A4A0"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -10.25,
  "class": "PanoramaCameraPosition",
  "pitch": 2.8
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A76A0622_8D74_59F5_416E_36630276E68C_camera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -66.41,
   "yaw": 74.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED"
  }
 ],
 "hfov": 360,
 "label": "Ruang Smart Classroom 2",
 "id": "panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258",
 "thumbnailUrl": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0_t.jpg",
   "overlays": [
    "this.overlay_980224A1_8D1C_BAF7_41CD_BA5645158502"
   ]
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9ED939E6_8D1D_CA7D_41BC_9D38FFEB7247"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 150.42,
   "yaw": 12.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD"
  },
  {
   "backwardYaw": 20.72,
   "yaw": -80.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_91D0890C_88D6_E89F_41BB_A2F05281772E"
  },
  {
   "panorama": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "Lobby",
 "id": "panorama_929FE66E_88D5_989B_41E0_FB789A9E3713",
 "thumbnailUrl": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9D128FA4_895A_5217_41CF_35CDEDCAC302",
  "this.overlay_9D2A145E_8946_5633_41BD_77A4E40C0018",
  "this.overlay_9A2EE295_894A_5230_41C0_9DECA94F20A6"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -159.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9F491BC8_8EA6_E29A_41D0_7A4809F84415"
},
{
 "easing": "linear",
 "id": "effect_93917DF0_8D1B_CA55_41CE_794A0F2120BF",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -37.31,
  "class": "PanoramaCameraPosition",
  "pitch": 1.68
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -80.45,
   "yaw": 20.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713"
  }
 ],
 "hfov": 360,
 "label": "Ruang Administrasi",
 "id": "panorama_91D0890C_88D6_E89F_41BB_A2F05281772E",
 "thumbnailUrl": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_98CDF005_8C1D_7649_41D6_9CCBC7608A16"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -147.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9A79FA93_8EA6_E28E_41E1_9A010699E64F"
},
{
 "easing": "linear",
 "id": "effect_AD904FE4_8D0C_C67D_41C1_41BAB0D41AE3",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.24,
  "class": "PanoramaCameraPosition",
  "pitch": 2.73
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -167.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9BA6DAAB_8EA6_E29E_41E1_129DE6F8E121"
},
{
 "easing": "linear",
 "id": "effect_A952D41F_8D74_59CB_41AC_1C0312705211",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "Masjid",
 "id": "panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5",
 "thumbnailUrl": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9CC32916_894E_7E30_41B6_7615C2ACD1DF"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 59.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9BC18AE2_8EA6_E28E_41BE_7A089C969674"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 74.39,
  "class": "PanoramaCameraPosition",
  "pitch": -3.47
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_camera"
},
{
 "easing": "linear",
 "id": "effect_AD0D37B6_8D1C_46DD_41DF_58FED68C8CA2",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "easing": "linear",
 "id": "effect_A9A33083_8D74_FAB4_41DC_D18A2E5FB63E",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -133.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9BDF8AF4_8EA6_E28A_41DD_34D2014DEC41"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -147.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9A6B3A87_8EA6_E296_41BD_8D631511EC3F"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -130.2,
   "yaw": -44.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C"
  },
  {
   "panorama": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "StudentCorner_1",
 "id": "panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B",
 "thumbnailUrl": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_98EDEF87_8C15_4A49_41D8_03EEB3639072",
  "this.overlay_98DD934E_8C1F_5ADA_41DF_3707D51B707C"
 ]
},
{
 "viewerArea": "this.viewer_uidA44E627D_8C35_DAB9_41E1_0B8C4A60764A",
 "id": "viewer_uidA44E627D_8C35_DAB9_41E1_0B8C4A60764AVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "easing": "linear",
 "id": "effect_A995265E_8D74_464D_41E1_82FDAEBA4CF7",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 37.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9B6A0B24_8EA6_E38B_41E1_21D982E45E70"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 99.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9B0BFB13_8EA6_E38E_41BE_241DC98D2D14"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -57.53,
  "class": "PanoramaCameraPosition",
  "pitch": -4.38
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 5.31,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 5.31,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 5.31,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_922DBEA9_88D7_A986_41D8_0414006B6236_camera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -95.34,
   "yaw": 140.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6"
  }
 ],
 "hfov": 360,
 "label": "GedungAwal_2",
 "id": "panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739",
 "thumbnailUrl": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9AF8D335_895E_3270_41C4_87C5FD20370B",
  "this.overlay_9D8D3FFE_895E_D1F3_41D8_AEB894191346",
  "this.overlay_9BB11B05_8C3B_4A49_41D4_81DA468E0C4D"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "Lorong Kelas",
 "id": "panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6",
 "thumbnailUrl": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9DB635CE_8CF4_7A4D_41C8_2BD046C599FA",
  "this.overlay_90C2660A_8D14_F9B4_41D9_D2C7CBC29163"
 ]
},
{
 "easing": "linear",
 "id": "effect_92536B55_8D1C_4E5C_41DD_475D209523CB",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9F114B86_8EA6_E296_41DA_D542D16E015C"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_camera"
},
{
 "easing": "linear",
 "id": "effect_93E7A2AF_8D14_7ECB_41B5_9394D918AAF8",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 30.62,
   "yaw": 32.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F"
  },
  {
   "backwardYaw": -134.78,
   "yaw": 10.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD"
  },
  {
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 32.27,
   "yaw": 10.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7"
  },
  {
   "backwardYaw": 32.27,
   "yaw": 17.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7"
  },
  {
   "backwardYaw": 172.7,
   "yaw": -34.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926"
  }
 ],
 "hfov": 360,
 "label": "Lift 2",
 "id": "panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC",
 "thumbnailUrl": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9D6030AA_8CF4_5AF5_41DB_D5925C430CAB",
  "this.overlay_AD6D8D7D_8D14_4A4F_41D4_D5604706D5B7",
  "this.overlay_AD6D9D7D_8D14_4A4F_41C1_524A61D7DF33",
  "this.overlay_AD6D7D7D_8D14_4A4F_41DD_108F089FDCD6",
  "this.overlay_AD6D4D7D_8D14_4A4F_41C0_50C481AB490D",
  "this.overlay_AD6D2D7D_8D14_4A4F_41DC_AA3DEB02EA3C",
  "this.overlay_AD6D0D7D_8D14_4A4F_41D8_5188CD66680B",
  "this.overlay_AD6D1D7D_8D14_4A4F_41D2_D737ECE315C0"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -39.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9F5D1BD7_8EA6_E2B6_41D4_0C1531F6CD23"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 45.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9A1CBA81_8EA6_E28A_41A1_89654AEC06BD"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 84.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 3.72,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 3.72,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 3.72,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9F172B8C_8EA6_E29A_41E1_7767E86588CB",
 "automaticRotationSpeed": 4
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 74.86,
   "yaw": -66.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258"
  }
 ],
 "hfov": 360,
 "label": "Ruang Smart Classroom",
 "id": "panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
 "thumbnailUrl": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9905F750_8D1C_4655_41D1_9B3857C41058"
 ]
},
{
 "easing": "linear",
 "id": "effect_AD93DFF1_8D0C_C657_41DA_38A499715505",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "easing": "linear",
 "id": "effect_AD1BED40_8D14_4BB5_41E1_20F868977652",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 54.5,
  "class": "PanoramaCameraPosition",
  "pitch": -1.34
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_camera"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "yaw": -74.2,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -74.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0.97
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 3.72,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 3.72,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 3.72,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": 0.97,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "automaticRotationSpeed": 4
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 113.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9BE12AD0_8EA6_E28A_41D3_46009602618B"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_90740B8F_8C0B_4A59_41D6_852554C921C8.mp3",
  "oggUrl": "media/audio_90740B8F_8C0B_4A59_41D6_852554C921C8.ogg"
 },
 "id": "audio_90740B8F_8C0B_4A59_41D6_852554C921C8",
 "data": {
  "label": "Mars BSI_01"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 145.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9C907C05_8EA6_E58A_4192_A3157A8FE707"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -149.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9A101A76_8EA6_E276_41C1_09B58FABA1ED"
},
{
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "class": "Map",
 "thumbnailUrl": "media/map_9B4BFFE2_8D14_C675_41C3_CD2DC22C82C1_t.jpg",
 "width": 1920,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "id": "map_9B4BFFE2_8D14_C675_41C3_CD2DC22C82C1",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "image": {
  "levels": [
   {
    "url": "media/map_9B4BFFE2_8D14_C675_41C3_CD2DC22C82C1.jpeg",
    "width": 1920,
    "class": "ImageResourceLevel",
    "height": 1080
   },
   {
    "url": "media/map_9B4BFFE2_8D14_C675_41C3_CD2DC22C82C1_lq.jpeg",
    "width": 341,
    "class": "ImageResourceLevel",
    "height": 192,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "fieldOfViewOverlayRadiusScale": 0.3,
 "label": "Panduan Lantai UBSI Kramat 98",
 "minimumZoomFactor": 0.5,
 "scaleMode": "fit_inside",
 "height": 1080,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "Perpus_3",
 "id": "panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B",
 "thumbnailUrl": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_99A2D19F_8C0D_7679_41C4_D083DDC68A3F",
  "this.overlay_9967CA07_8C0D_4A49_41C8_93E51BBBE86F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -83.74,
  "class": "PanoramaCameraPosition",
  "pitch": 3.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -3.65,
   "yaw": -2.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7F8496B_8C15_F6D9_41C3_93D586540138"
  },
  {
   "backwardYaw": -34.16,
   "yaw": 172.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC"
  }
 ],
 "hfov": 360,
 "label": "Ruang Dosen",
 "id": "panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926",
 "thumbnailUrl": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0_t.jpg",
   "overlays": [
    "this.overlay_9C3571CC_8CFC_5A4D_41E0_33D0B0AAE3F1"
   ]
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9DE8104A_8CF5_F9B4_41DD_00443EFDF54D"
 ]
},
{
 "label": "Hyperlapse_Gedung_Wsound (1)(1)",
 "class": "Video",
 "thumbnailUrl": "media/video_90EACF8E_8C34_CA5A_41C7_255144D12B1E_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_90EACF8E_8C34_CA5A_41C7_255144D12B1E",
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_90EACF8E_8C34_CA5A_41C7_255144D12B1E.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 36.6,
   "yaw": 179.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1"
  }
 ],
 "hfov": 360,
 "label": "Ruang Lab 2",
 "id": "panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A",
 "thumbnailUrl": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9E1F3976_8D14_CA5C_41CB_75C062804E3B"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 10.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0.58
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_camera"
},
{
 "easing": "linear",
 "id": "effect_9274D1EE_8D15_BA4D_41D5_879A85524051",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 77.22,
  "class": "PanoramaCameraPosition",
  "pitch": 4.45
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -61.17,
   "yaw": 124.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F"
  },
  {
   "backwardYaw": 40.97,
   "yaw": -13.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436"
  }
 ],
 "hfov": 360,
 "label": "Aula 3",
 "id": "panorama_A76A0622_8D74_59F5_416E_36630276E68C",
 "thumbnailUrl": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_A31A3490_8D0C_7AD5_41CD_7698A67B6295",
  "this.overlay_A308868D_8D0C_46CC_41CF_EE63A2FDE828"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 5.18,
  "class": "PanoramaCameraPosition",
  "pitch": -9.12
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": -18.5,
    "yawSpeed": 3.72,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": -323,
    "yawSpeed": 3.72,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": -18.5,
    "yawSpeed": 3.72,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 166.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9F75EBB0_8EA6_E28A_41CE_2CB364DB2BA2"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 23.46,
  "class": "PanoramaCameraPosition",
  "pitch": 1.11
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_camera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "ADM_perpus",
 "id": "panorama_9249EE30_88D6_A887_41D4_F1857C016DB0",
 "thumbnailUrl": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9DBEC322_894A_D213_41C5_CB3EF135184E",
  "this.overlay_9C25611D_894A_EE31_41D6_73A4F566270C",
  "this.overlay_90163569_8C0D_5ED9_41E0_02DCB00FED17"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9C873BF9_8EA6_E27A_41D7_FC1A169FABE8"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -55.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9BCFAAEE_8EA6_E296_41D7_761A03268CF2"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_9B4BFFE2_8D14_C675_41C3_CD2DC22C82C1",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_9AC74A2C_8EA6_ED9A_41E0_D763C02DBD20",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -51.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0.64
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_camera"
},
{
 "items": [
  {
   "media": "this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_91D0890C_88D6_E89F_41BB_A2F05281772E",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7F8496B_8C15_F6D9_41C3_93D586540138",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_A76A0622_8D74_59F5_416E_36630276E68C",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A76A0622_8D74_59F5_416E_36630276E68C_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -29.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9F40ABBC_8EA6_E2FA_41D8_FAEEC3368233"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "Perpus_1",
 "id": "panorama_922DBEA9_88D7_A986_41D8_0414006B6236",
 "thumbnailUrl": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_t.jpg",
   "overlays": [
    "this.overlay_832B361E_8C14_BA7A_41B0_986DC6718355"
   ]
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_984A804E_8C15_56DB_41C7_DF2721A8F2BA",
  "this.overlay_995702D6_8C15_DBCB_41C9_15D7475FDE96"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -143.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9F54ABCE_8EA6_E297_41DC_372E6118E918"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 140.43,
   "yaw": -95.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739"
  },
  {
   "panorama": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "Gedung_Awal",
 "id": "panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6",
 "thumbnailUrl": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9BD67659_895A_7230_41C6_4A6B78CA969F",
  "this.overlay_9A6C3B02_8946_7210_41DC_3BD3D4A2B708"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -41.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0.66
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -133.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0.33
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -154.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9BB50AB8_8EA6_E2FA_41DF_D7A44C3B7061"
},
{
 "easing": "linear",
 "id": "effect_90CCD28C_8D15_FECD_41D1_A4C27A4CD341",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -133.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_9B2DBB00_8EA6_E38B_41DE_24968C32384A"
},
{
 "easing": "linear",
 "id": "effect_AD1C7D36_8D14_4BDD_41DD_C6EFA4F651D6",
 "duration": 500,
 "class": "FadeInEffect"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "label": "Perpus_2",
 "id": "panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046",
 "thumbnailUrl": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1_t.jpg",
 "hfovMin": "120%",
 "pitch": 0,
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0_t.jpg"
  },
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "LivePanorama",
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_83B6C1DB_8C1B_B9F9_41B8_420B08F71E37",
  "this.overlay_9C46BBA6_8C1D_4A4B_41D2_C6C8DBD28AE7"
 ]
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "paddingLeft": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "minHeight": 50,
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "left": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBorderSize": 0,
 "height": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "paddingBottom": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "width": 300,
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 0,
 "data": {
  "name": "--- LEFT PANEL"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "width": 115.05,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "height": 641,
 "shadow": false,
 "layout": "absolute",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "left": 70,
 "width": 550,
 "children": [
  "this.Image_911F6BD8_8C0D_C9C7_41A0_EF094875AE98"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": 34,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "shadow": false,
 "layout": "absolute",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "--STICKER"
 },
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "--INFO photo"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "--LOCATION"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#04A3E1",
 "left": "0%",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "gap": 10,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "backgroundOpacity": 0.6,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "--REALTOR"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "minHeight": 30,
 "propagateClick": true,
 "id": "Image_9194E92A_8C0F_565B_41D3_236046784B7C",
 "paddingLeft": 0,
 "right": "3.5%",
 "width": "5.73%",
 "minWidth": 40,
 "borderSize": 0,
 "url": "skin/Image_9194E92A_8C0F_565B_41D3_236046784B7C.png",
 "top": "12.32%",
 "horizontalAlign": "left",
 "shadow": false,
 "height": "11.797%",
 "verticalAlign": "top",
 "paddingTop": 0,
 "maxWidth": 1095,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 1095,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "minHeight": 30,
 "propagateClick": true,
 "id": "Image_91E16A83_8C0B_CA49_41DD_8A1AA88254D7",
 "paddingLeft": 0,
 "right": "0.97%",
 "width": "8.387%",
 "minWidth": 40,
 "borderSize": 0,
 "url": "skin/Image_91E16A83_8C0B_CA49_41DD_8A1AA88254D7.png",
 "top": "5.73%",
 "horizontalAlign": "left",
 "shadow": false,
 "height": "5.733%",
 "verticalAlign": "top",
 "paddingTop": 0,
 "maxWidth": 1095,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 1095,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_A9D0C119_8C0B_B646_41D8_01838B21DA87",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "left": "25.63%",
 "shadowVerticalLength": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "top": "9.04%",
 "width": "31.544%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000033",
  "#000099"
 ],
 "shadow": true,
 "layout": "absolute",
 "horizontalAlign": "left",
 "shadowBlurRadius": 6,
 "gap": 10,
 "height": "32.635%",
 "shadowHorizontalLength": 3,
 "shadowOpacity": 0.15,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "shadowSpread": 1,
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container52057"
 },
 "propagateClick": false
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "id": "Label_97591067_8D3C_5A7B_41C9_023909B4D215",
 "paddingLeft": 0,
 "right": "0.48%",
 "fontColor": "#FFFFFF",
 "width": "19.24%",
 "textShadowColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "textShadowOpacity": 0.7,
 "text": "Smart-Classroom UBSI",
 "textShadowVerticalLength": 3,
 "bottom": "1.76%",
 "horizontalAlign": "center",
 "fontSize": "22px",
 "shadow": false,
 "height": "9.151%",
 "textShadowHorizontalLength": 3,
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "textShadowBlurRadius": 3,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "SmartClassroom"
 },
 "fontWeight": "bold",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "id": "Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE",
 "paddingLeft": 0,
 "right": "0%",
 "fontColor": "#FFFFFF",
 "width": "19.24%",
 "textShadowColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "textShadowOpacity": 0.7,
 "text": "Laboratorium",
 "textShadowVerticalLength": 3,
 "bottom": "1.87%",
 "horizontalAlign": "center",
 "fontSize": "22px",
 "shadow": false,
 "height": "9.151%",
 "textShadowHorizontalLength": 3,
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "textShadowBlurRadius": 3,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "Laboratorium"
 },
 "fontWeight": "bold",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "id": "Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B",
 "paddingLeft": 0,
 "right": "0%",
 "fontColor": "#FFFFFF",
 "width": "19.24%",
 "textShadowColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "textShadowOpacity": 0.7,
 "text": "Mushola",
 "textShadowVerticalLength": 3,
 "bottom": "1.87%",
 "horizontalAlign": "center",
 "fontSize": "22px",
 "shadow": false,
 "height": "9.151%",
 "textShadowHorizontalLength": 3,
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "textShadowBlurRadius": 3,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "Mushola"
 },
 "fontWeight": "bold",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "id": "Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29",
 "paddingLeft": 0,
 "right": "0%",
 "fontColor": "#FFFFFF",
 "width": "19.24%",
 "textShadowColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "textShadowOpacity": 0.7,
 "text": "Ruang Dosen",
 "textShadowVerticalLength": 3,
 "bottom": "1.87%",
 "horizontalAlign": "center",
 "fontSize": "22px",
 "shadow": false,
 "height": "9.151%",
 "textShadowHorizontalLength": 3,
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "textShadowBlurRadius": 3,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "Ruang Dosen"
 },
 "fontWeight": "bold",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "id": "Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B",
 "paddingLeft": 0,
 "right": "0%",
 "fontColor": "#FFFFFF",
 "width": "19.24%",
 "textShadowColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "textShadowOpacity": 0.7,
 "text": "Ruang Serbaguna (Aula)",
 "textShadowVerticalLength": 3,
 "bottom": "1.87%",
 "horizontalAlign": "center",
 "fontSize": "22px",
 "shadow": false,
 "height": "9.151%",
 "textShadowHorizontalLength": 3,
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "textShadowBlurRadius": 3,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "aula"
 },
 "fontWeight": "bold",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "id": "Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2",
 "paddingLeft": 0,
 "right": "0%",
 "fontColor": "#FFFFFF",
 "width": "19.24%",
 "textShadowColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "textShadowOpacity": 0.7,
 "text": "Perpustakaan",
 "textShadowVerticalLength": 3,
 "bottom": "1.87%",
 "horizontalAlign": "center",
 "fontSize": "22px",
 "shadow": false,
 "height": "9.151%",
 "textShadowHorizontalLength": 3,
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "textShadowBlurRadius": 3,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "Perpus"
 },
 "fontWeight": "bold",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "id": "Label_960AE679_8D0C_4654_41E0_13C0164AE489",
 "paddingLeft": 0,
 "right": "0%",
 "fontColor": "#FFFFFF",
 "width": "19.24%",
 "textShadowColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "textShadowOpacity": 0.7,
 "text": "Student Corner",
 "textShadowVerticalLength": 3,
 "bottom": "1.87%",
 "horizontalAlign": "center",
 "fontSize": "22px",
 "shadow": false,
 "height": "9.151%",
 "textShadowHorizontalLength": 3,
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "textShadowBlurRadius": 3,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "Student Corner"
 },
 "fontWeight": "bold",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "id": "Label_91245760_8D0C_4674_41E1_819C525ED2B6",
 "paddingLeft": 0,
 "right": "0%",
 "fontColor": "#FFFFFF",
 "width": "19.24%",
 "textShadowColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "textShadowOpacity": 0.7,
 "text": "Ruang Administrasi",
 "textShadowVerticalLength": 3,
 "bottom": "1.87%",
 "horizontalAlign": "center",
 "fontSize": "22px",
 "shadow": false,
 "height": "9.151%",
 "textShadowHorizontalLength": 3,
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "textShadowBlurRadius": 3,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "Administrasi"
 },
 "fontWeight": "bold",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "minHeight": 1,
 "propagateClick": false,
 "id": "Image_8035FC4A_8E9A_259E_41C8_DE1B1FE2C7B1",
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "width": "7.901%",
 "minWidth": 1,
 "borderSize": 0,
 "left": "18.36%",
 "url": "skin/Image_8035FC4A_8E9A_259E_41C8_DE1B1FE2C7B1.png",
 "bottom": "4.3%",
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.openLink('https://kianorganizer.com/', '_blank')",
 "height": "5.298%",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "maxWidth": 1760,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 681,
 "data": {
  "name": "Image2769"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "transparencyActive": false,
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTip": "Fullscreen",
 "id": "IconButton_80B094D1_8E5C_F7B7_41E1_9309E37AB7C3",
 "paddingLeft": 0,
 "toolTipShadowSpread": 0,
 "toolTipBorderColor": "#767676",
 "right": "0.33%",
 "width": 56,
 "minWidth": 1,
 "borderSize": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "iconURL": "skin/IconButton_80B094D1_8E5C_F7B7_41E1_9309E37AB7C3.png",
 "toolTipShadowVerticalLength": 0,
 "bottom": "0.8%",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "mode": "toggle",
 "height": 34,
 "shadow": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "maxWidth": 128,
 "backgroundOpacity": 0,
 "toolTipPaddingTop": 4,
 "class": "IconButton",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipShadowOpacity": 1,
 "maxHeight": 128,
 "data": {
  "name": "IconButton1493"
 },
 "toolTipFontStyle": "normal",
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "toolTipTextShadowOpacity": 0
},
{
 "transparencyActive": true,
 "minHeight": 1,
 "propagateClick": true,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "maxHeight": 58,
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "transparencyActive": true,
 "minHeight": 1,
 "propagateClick": true,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "maxHeight": 58,
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.63,
   "image": "this.AnimatedImageResource_B2304C6B_8D1B_CA4B_41B4_0B635E159451",
   "pitch": -10.11,
   "yaw": 40.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3248498_8D0C_DAD5_41C3_34B7A750DCB8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A76A0622_8D74_59F5_416E_36630276E68C, this.camera_9F75EBB0_8EA6_E28A_41CE_2CB364DB2BA2); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.63,
   "yaw": 40.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_2_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.11
  }
 ]
},
{
 "transparencyActive": false,
 "minHeight": 1,
 "propagateClick": false,
 "id": "IconButton_81572D86_8E5C_D19D_41D8_88393CDDC4D9",
 "paddingLeft": 0,
 "right": "26%",
 "width": 50,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_81572D86_8E5C_D19D_41D8_88393CDDC4D9.png",
 "bottom": "0.3%",
 "mode": "push",
 "height": 42,
 "shadow": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "maxWidth": 55,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 54,
 "data": {
  "name": "IconButton12826"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "transparencyActive": true,
 "minHeight": 1,
 "propagateClick": true,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "mode": "push",
 "height": 58,
 "shadow": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingTop": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "visible": false,
 "maxHeight": 58,
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "transparencyActive": true,
 "minHeight": 1,
 "propagateClick": true,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "maxHeight": 58,
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "transparencyActive": true,
 "minHeight": 1,
 "propagateClick": true,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "mode": "toggle",
 "height": 58,
 "shadow": false,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "maxHeight": 58,
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.24,
   "image": "this.AnimatedImageResource_928EBDA2_8C1B_4E4B_41D6_55F0062F90AF",
   "pitch": -4.89,
   "yaw": -130.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9899F433_8C17_BE4A_41C0_1A5BEFF017F6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B, this.camera_9CA83BE1_8EA6_E28A_41D2_B727A1A9E633); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.24,
   "yaw": -130.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_2_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.57,
   "image": "this.AnimatedImageResource_9E566D5C_8D14_CA4D_41DD_C27EC4E4D01A",
   "pitch": -26.57,
   "yaw": -53.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9CE0D7B9_8D0D_C6D7_41E0_6372FC858E42",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 21.57,
   "yaw": -53.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_2_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "hfov": 42.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_1_0.png",
      "width": 971,
      "class": "ImageResourceLevel",
      "height": 545
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.88,
   "yaw": 41.55
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD8AC070_8D0C_FA55_41D8_758ABA163999",
 "maps": [
  {
   "hfov": 42.64,
   "yaw": 41.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_AD8A2070_8D0C_FA55_4186_2A66A2638B1C",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_AD904FE4_8D0C_C67D_41C1_41BAB0D41AE3, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.98,
   "yaw": 39.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_2_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_AD8A0070_8D0C_FA55_41E0_18ED14FDE4CB",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_AD93DFF1_8D0C_C657_41DA_38A499715505, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 46.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_3_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_AD8A1070_8D0C_FA55_41D3_2CB4B5F7D4A4",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.79,
   "yaw": 24.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_4_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_AD8A4070_8D0C_FA55_41D6_A4590EB43CAD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC, this.camera_9F0F2B7A_8EA6_E27E_41D7_B1AB6B934146); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 32.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_5_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_AD8DA070_8D0C_FA55_41DD_00621318A491",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F, this.camera_9B1A5B19_8EA6_E3BA_41C3_2C3F5CC65D55); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.79,
   "yaw": 46.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_6_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_AD8D8070_8D0C_FA55_41D3_C34B38026317",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD, this.camera_9B6A0B24_8EA6_E38B_41E1_21D982E45E70); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.98,
   "yaw": 25.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_7_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "hfov": 42.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_0_0.png",
      "width": 971,
      "class": "ImageResourceLevel",
      "height": 545
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.36,
   "yaw": 39.89
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BD2C00DB_8D74_DA54_41E0_57ACC01036AD",
 "maps": [
  {
   "hfov": 42.66,
   "yaw": 39.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_BD2C20DB_8D74_DA54_41AA_C0A6AFD38C6E",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_A2D2F0AA_8D74_DAF5_41C0_FD150229F63E, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 38.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_1_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_BD2C70DB_8D74_DA54_41D0_D3677FAAA270",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_A2CEC0AA_8D74_DAF5_41DC_A46FDC661A04, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 45.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_2_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_BD2BB0DB_8D74_DA54_41A6_0DD97F08640E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7, this.camera_9BDF8AF4_8EA6_E28A_41DD_34D2014DEC41); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.87,
   "yaw": 23.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_3_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_BD2BA0DB_8D74_DA54_41D7_D6DB9C323618",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC, this.camera_9B3C7B06_8EA6_E397_41D4_C72378871682); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.86,
   "yaw": 30.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_4_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.42
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_BD2BE0DB_8D74_DA54_41DF_3BE3E8086BA7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD, this.camera_9BC18AE2_8EA6_E28E_41BE_7A089C969674); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 23.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_5_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_BD2B00DB_8D74_DA54_41D7_D579A58BFC5A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7, this.camera_9B2DBB00_8EA6_E38B_41DE_24968C32384A); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 30.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_6_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.24,
   "image": "this.AnimatedImageResource_B23FDC6B_8D1B_CA4B_41D1_8E32A753855B",
   "pitch": -15.51,
   "yaw": -61.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_BC69C1C2_8D0C_BAB4_41E0_E5FBCD8040C0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A76A0622_8D74_59F5_416E_36630276E68C, this.camera_9BCFAAEE_8EA6_E296_41D7_761A03268CF2); this.mainPlayList.set('selectedIndex', 23); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 23.24,
   "yaw": -61.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_7_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.14,
   "image": "this.AnimatedImageResource_95DFAD56_8D0C_CA5C_41B2_7AAF0DAD63BA",
   "pitch": -9.01,
   "yaw": 36.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9FC84D6F_8D14_4A4B_41D5_7683C98ED125",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A, this.camera_9F114B86_8EA6_E296_41DA_D542D16E015C); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.14,
   "yaw": 36.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.71,
   "image": "this.AnimatedImageResource_95DF3D56_8D0C_CA5C_419D_E84DE65364C6",
   "pitch": -9.57,
   "yaw": 129.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9ED6FC8A_8D14_CAB5_41B7_7EF043DCC4D6",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.71,
   "yaw": 129.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_2_HS_0_0.png",
      "width": 186,
      "class": "ImageResourceLevel",
      "height": 190
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.4,
   "yaw": -3.65
  }
 ],
 "id": "overlay_9C3F52BB_8CF4_5ED4_41D4_1CA2F98C3569",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926, this.camera_9CB15BE7_8EA6_E296_41CD_6C941365A4A0); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.22,
   "yaw": -3.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_2_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_96CB866B_8D34_464B_41D2_9269E55BBAD5",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7, this.camera_9B837ABE_8EA6_E2F6_41BB_43CC4DA03AAE); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.98,
   "yaw": -134.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_7_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.81,
   "image": "this.AnimatedImageResource_950083C8_8C0D_D9C7_41E1_3DCFCE79F11B",
   "pitch": -10.87,
   "yaw": 150.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_996EE68C_8C0B_DA5F_41DF_18DD9462CA9A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713, this.camera_9BA6DAAB_8EA6_E29E_41E1_129DE6F8E121); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 17.81,
   "yaw": 150.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "hfov": 42.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_5_0.png",
      "width": 971,
      "class": "ImageResourceLevel",
      "height": 545
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.9,
   "yaw": -125.51
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_981EE3E0_8D14_BE75_41D6_19FD01ACEF7C",
 "maps": [
  {
   "hfov": 42.6,
   "yaw": -125.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_5_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_91AAD47E_8D0C_DA4D_4187_A02F5EF0E210",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_93E7A2AF_8D14_7ECB_41B5_9394D918AAF8, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.98,
   "yaw": -127.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_8_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_9073F775_8D14_C65F_41D7_A101ECE54689",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_90CCD28C_8D15_FECD_41D1_A4C27A4CD341, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.8,
   "yaw": -120.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_9_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_935A69FB_8D14_4A4B_41C1_6BCDF68147ED",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7, this.camera_9BB50AB8_8EA6_E2FA_41DF_D7A44C3B7061); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.88,
   "yaw": -142.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_10_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_93592A9B_8D14_4ECB_41D5_FDCEBAF67DA9",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC, this.camera_9B93EACA_8EA6_E29E_41C0_C3A645D3EB1B); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.85,
   "yaw": -134.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_11_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_90DD89CA_8D15_CAB4_41CD_9E5E946EBC5D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F, this.camera_9A58DAA5_8EA6_E295_41D1_F56D739E91B4); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -120.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_13_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.85
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.23,
   "image": "this.AnimatedImageResource_99AEF173_8E54_D17B_41BC_6E39D60A899A",
   "pitch": -24.68,
   "yaw": 74.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_980224A1_8D1C_BAF7_41CD_BA5645158502",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED, this.camera_9BE12AD0_8EA6_E28A_41D3_46009602618B); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 21.23,
   "yaw": 74.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.91,
   "image": "this.AnimatedImageResource_95DE3D56_8D0C_CA5C_41D3_3B6B078BD3C3",
   "pitch": -1.53,
   "yaw": -42.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9ED939E6_8D1D_CA7D_41BC_9D38FFEB7247",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.91,
   "yaw": -42.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.86,
   "image": "this.AnimatedImageResource_999F1DDC_8C17_49FF_41D1_7148472CAD13",
   "pitch": -1.12,
   "yaw": -57.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9D128FA4_895A_5217_41CF_35CDEDCAC302",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.86,
   "yaw": -57.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.73,
   "image": "this.AnimatedImageResource_95038849_8C0B_B6D9_41D8_9C3C3A884430",
   "pitch": -12.12,
   "yaw": 12.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9D2A145E_8946_5633_41BD_77A4E40C0018",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD, this.camera_9F40ABBC_8EA6_E2FA_41D8_FAEEC3368233); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 17.73,
   "yaw": 12.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.25,
   "image": "this.AnimatedImageResource_933F6DB3_8946_3671_41C6_3DCBED444A9B",
   "pitch": -3.32,
   "yaw": -80.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A2EE295_894A_5230_41C0_9DECA94F20A6",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_91D0890C_88D6_E89F_41BB_A2F05281772E, this.camera_9F491BC8_8EA6_E29A_41D0_7A4809F84415); this.mainPlayList.set('selectedIndex', 11); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, true, 0, this.effect_92536B55_8D1C_4E5C_41DD_475D209523CB, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.25,
   "yaw": -80.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.4,
   "image": "this.AnimatedImageResource_9677361D_8C1C_DA79_41D0_8C3BC2B8B13D",
   "pitch": -0.35,
   "yaw": 20.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_98CDF005_8C1D_7649_41D6_9CCBC7608A16",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713, this.camera_9B0BFB13_8EA6_E38E_41BE_241DC98D2D14); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 9.4,
   "yaw": 20.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.15,
   "image": "this.AnimatedImageResource_933FCDB3_8946_3671_41D6_83359D7C1DED",
   "pitch": -12.25,
   "yaw": -162.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9CC32916_894E_7E30_41B6_7615C2ACD1DF",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 19.15,
   "yaw": -162.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.25
  }
 ]
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "paddingLeft": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "left": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBorderSize": 0,
 "height": "99.975%",
 "progressBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "paddingBottom": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.91,
   "image": "this.AnimatedImageResource_9A11DC83_8C1C_CE49_41D3_95EECC4FD1E5",
   "pitch": -0.35,
   "yaw": -44.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_98EDEF87_8C15_4A49_41D8_03EEB3639072",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C, this.camera_9F1CCB98_8EA6_E2BA_41DD_DFCFB8AD7842); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 2.91,
   "yaw": -44.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.78,
   "image": "this.AnimatedImageResource_9608861D_8C1C_DA79_41C0_7BFFFD82EF95",
   "pitch": -2.16,
   "yaw": -145.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_98DD934E_8C1F_5ADA_41DF_3707D51B707C",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.78,
   "yaw": -145.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.16
  }
 ]
},
{
 "progressBarBorderColor": "#0066FF",
 "data": {
  "name": "ViewerArea57618"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uidA44E627D_8C35_DAB9_41E1_0B8C4A60764A",
 "paddingLeft": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "minHeight": 50,
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBorderSize": 0,
 "height": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingTop": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipPaddingTop": 4,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.41,
   "image": "this.AnimatedImageResource_93419DB3_8946_3671_41DB_35C85E9C2199",
   "pitch": -10.72,
   "yaw": -32.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9AF8D335_895E_3270_41C4_87C5FD20370B",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.41,
   "yaw": -32.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.46,
   "image": "this.AnimatedImageResource_933E6DB3_8946_3671_41AE_B3AB69789C6E",
   "pitch": -11.3,
   "yaw": 29.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9D8D3FFE_895E_D1F3_41D8_AEB894191346",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.46,
   "yaw": 29.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.93,
   "image": "this.AnimatedImageResource_9863CD8D_8C35_4E59_41C7_2281B7EC4694",
   "pitch": -17.52,
   "yaw": 140.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9BB11B05_8C3B_4A49_41D4_81DA468E0C4D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6, this.camera_9F172B8C_8EA6_E29A_41E1_7767E86588CB); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 18.93,
   "yaw": 140.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_2_HS_0_0.png",
      "width": 320,
      "class": "ImageResourceLevel",
      "height": 291
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.7,
   "yaw": 36.3
  }
 ],
 "id": "overlay_9DB635CE_8CF4_7A4D_41C8_2BD046C599FA",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.05,
   "yaw": 36.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_2_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0_HS_1_0.png",
      "width": 320,
      "class": "ImageResourceLevel",
      "height": 291
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.7,
   "yaw": 80.52
  }
 ],
 "id": "overlay_90C2660A_8D14_F9B4_41D9_D2C7CBC29163",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, true, 0, this.effect_9274D1EE_8D15_BA4D_41D5_879A85524051, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 14.05,
   "yaw": 80.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_2_HS_0_0.png",
      "width": 310,
      "class": "ImageResourceLevel",
      "height": 278
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.41,
   "yaw": -34.16
  }
 ],
 "id": "overlay_9D6030AA_8CF4_5AF5_41DB_D5925C430CAB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926, this.camera_9A484A99_8EA6_E2BA_41DB_2BFD5568E393); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, true, 0, this.effect_93917DF0_8D1B_CA55_41CE_794A0F2120BF, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.63,
   "yaw": -34.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_2_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "hfov": 42.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_1_0.png",
      "width": 971,
      "class": "ImageResourceLevel",
      "height": 545
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.53,
   "yaw": 27.13
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD6D8D7D_8D14_4A4F_41D4_D5604706D5B7",
 "maps": [
  {
   "hfov": 42.66,
   "yaw": 27.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_AD6D9D7D_8D14_4A4F_41C1_524A61D7DF33",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_AD1C7D36_8D14_4BDD_41DD_C6EFA4F651D6, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 25.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_2_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_AD6D7D7D_8D14_4A4F_41DD_108F089FDCD6",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_AD1BED40_8D14_4BB5_41E1_20F868977652, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 32.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_3_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_AD6D4D7D_8D14_4A4F_41C0_50C481AB490D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7, this.camera_9A6B3A87_8EA6_E296_41BD_8D631511EC3F); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.87,
   "yaw": 10.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_4_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_AD6D2D7D_8D14_4A4F_41DC_AA3DEB02EA3C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD, this.camera_9A1CBA81_8EA6_E28A_41A1_89654AEC06BD); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.85,
   "yaw": 10.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_5_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_AD6D0D7D_8D14_4A4F_41D8_5188CD66680B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F, this.camera_9A101A76_8EA6_E276_41C1_09B58FABA1ED); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 32.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_6_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_AD6D1D7D_8D14_4A4F_41D2_D737ECE315C0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7, this.camera_9A79FA93_8EA6_E28E_41E1_9A010699E64F); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 17.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_7_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.04,
   "image": "this.AnimatedImageResource_95DEAD56_8D0C_CA5C_41D9_86FF7A9C3F5B",
   "pitch": -13.02,
   "yaw": -66.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9905F750_8D1C_4655_41D1_9B3857C41058",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258, this.camera_9CBC3BF3_8EA6_E28E_41D6_2215CDD8A93E); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.04,
   "yaw": -66.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.98,
   "image": "this.AnimatedImageResource_957B1E5E_8C15_CAFB_41B6_8EF338FC037A",
   "pitch": -13.32,
   "yaw": 72.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_99A2D19F_8C0D_7679_41C4_D083DDC68A3F",
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_9BF13ADC_8EA6_E2BA_41B3_6358F6EFA74C, this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B); this.startPanoramaWithCamera(this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046, this.camera_9BF13ADC_8EA6_E2BA_41B3_6358F6EFA74C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.98,
   "yaw": 72.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.61,
   "image": "this.AnimatedImageResource_957B7E5E_8C15_CAFB_41D6_FB0BBE7A02D6",
   "pitch": -7.08,
   "yaw": 81.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9967CA07_8C0D_4A49_41C8_93E51BBBE86F",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 3.61,
   "yaw": 81.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0_HS_3_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.08
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.92,
   "image": "this.AnimatedImageResource_9E555D5C_8D14_CA4D_41D9_1D7B0E418DE1",
   "pitch": -22.55,
   "yaw": -2.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C3571CC_8CFC_5A4D_41E0_33D0B0AAE3F1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7F8496B_8C15_F6D9_41C3_93D586540138, this.camera_9C873BF9_8EA6_E27A_41D7_FC1A169FABE8); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.92,
   "yaw": -2.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_2_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_2_HS_0_0.png",
      "width": 369,
      "class": "ImageResourceLevel",
      "height": 282
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.88,
   "yaw": 172.7
  }
 ],
 "id": "overlay_9DE8104A_8CF5_F9B4_41DD_00443EFDF54D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC, this.camera_9C907C05_8EA6_E58A_4192_A3157A8FE707); this.mainPlayList.set('selectedIndex', 20); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 16.17,
   "yaw": 172.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_2_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.94,
   "image": "this.AnimatedImageResource_95DF4D56_8D0C_CA5C_41C1_907EC8ED1775",
   "pitch": -13.99,
   "yaw": 179.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9E1F3976_8D14_CA5C_41CB_75C062804E3B",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1, this.camera_9F54ABCE_8EA6_E297_41DC_372E6118E918); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 5.94,
   "yaw": 179.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Point 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.34,
   "image": "this.AnimatedImageResource_B230EC6B_8D1B_CA4B_41DC_4A91136AA259",
   "pitch": -10.49,
   "yaw": -13.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A31A3490_8D0C_7AD5_41CD_7698A67B6295",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436, this.camera_9F6A7BAA_8EA6_E29E_41DF_6B978EC6ECA7); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 16.34,
   "yaw": -13.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_2_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.25,
   "image": "this.AnimatedImageResource_B2310C6B_8D1B_CA4B_41D3_7382A4D9962F",
   "pitch": -7.82,
   "yaw": 124.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_A308868D_8D0C_46CC_41CF_EE63A2FDE828",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F, this.camera_9F63CB9E_8EA6_E2B6_41DF_58A9BCA2F7D9); this.mainPlayList.set('selectedIndex', 21); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 16.25,
   "yaw": 124.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_2_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.6,
   "image": "this.AnimatedImageResource_999EBDE2_8C17_49CB_41D9_DCDA7E8C9002",
   "pitch": -5.14,
   "yaw": -55.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9DBEC322_894A_D213_41C5_CB3EF135184E",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 15.6,
   "yaw": -55.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.07,
   "image": "this.AnimatedImageResource_99911DE2_8C17_49CB_41CC_EACB6FA93044",
   "pitch": -6.15,
   "yaw": 103.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C25611D_894A_EE31_41D6_73A4F566270C",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, true, 0, this.effect_AD0D37B6_8D1C_46DD_41DF_58FED68C8CA2, 'showEffect', false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 16.07,
   "yaw": 103.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.58,
   "image": "this.AnimatedImageResource_91F6E777_8CF7_5AC9_41C5_4259D38EB1E9",
   "pitch": -5.89,
   "yaw": -158.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_90163569_8C0D_5ED9_41E0_02DCB00FED17",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 15.58,
   "yaw": -158.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.78,
   "image": "this.AnimatedImageResource_9C3E9FB5_8C1D_4A49_41C7_82F81ADCD25B",
   "pitch": -2.82,
   "yaw": 82.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_832B361E_8C14_BA7A_41B0_986DC6718355",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 8.78,
   "yaw": 82.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.23,
   "image": "this.AnimatedImageResource_95752E58_8C15_CAC7_41C0_BC29890D8D41",
   "pitch": -9.13,
   "yaw": -45.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_984A804E_8C15_56DB_41C7_DF2721A8F2BA",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.23,
   "yaw": -45.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_HS_3_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.28,
   "image": "this.AnimatedImageResource_957A8E5E_8C15_CAFB_41DE_8243F8FC07F7",
   "pitch": -3.2,
   "yaw": -42.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_995702D6_8C15_DBCB_41C9_15D7475FDE96",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 4.28,
   "yaw": -42.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_HS_4_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.13,
   "image": "this.AnimatedImageResource_92832D9C_8C1B_4E7E_41DE_8C2E0E3EE316",
   "pitch": -6.44,
   "yaw": -95.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9BD67659_895A_7230_41C6_4A6B78CA969F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739, this.camera_9F5D1BD7_8EA6_E2B6_41D4_0C1531F6CD23); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 13.13,
   "yaw": -95.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_2_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.54,
   "image": "this.AnimatedImageResource_95772E58_8C15_CAC7_41DD_E2EDE6BB0AC3",
   "pitch": 7.62,
   "yaw": -55.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_9A6C3B02_8946_7210_41DC_3BD3D4A2B708",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 7.54,
   "yaw": -55.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.37,
   "image": "this.AnimatedImageResource_9C3F9FB5_8C1D_4A49_41CA_C45EE40106D5",
   "pitch": -6.97,
   "yaw": 78.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_83B6C1DB_8C1B_B9F9_41B8_420B08F71E37",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 21.37,
   "yaw": 78.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.1,
   "image": "this.AnimatedImageResource_9C3F5FB5_8C1D_4A49_41CD_E4D99FF14473",
   "pitch": -11.49,
   "yaw": -73.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C46BBA6_8C1D_4A4B_41D2_C6C8DBD28AE7",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 21.1,
   "yaw": -73.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49
  }
 ]
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "width": 66,
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "absolute",
 "height": "100%",
 "verticalAlign": "top",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "paddingLeft": 40,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "right": "0%",
 "width": 300,
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.IconButton_80B094D1_8E5C_F7B7_41E1_9309E37AB7C3",
  "this.IconButton_81572D86_8E5C_D19D_41D8_88393CDDC4D9"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "backgroundOpacity": 0.7,
 "paddingTop": 40,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 40,
 "data": {
  "name": "- EXPANDED"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 40
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "width": 110,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 110,
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 0,
 "data": {
  "name": "button menu sup"
 },
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "91.304%",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "center",
 "shadow": false,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "height": "85.959%",
 "verticalAlign": "top",
 "gap": 3,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "-button set"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "minHeight": 30,
 "propagateClick": true,
 "id": "Image_911F6BD8_8C0D_C9C7_41A0_EF094875AE98",
 "paddingLeft": 0,
 "width": "100%",
 "minWidth": 40,
 "borderSize": 0,
 "left": "0%",
 "url": "skin/Image_911F6BD8_8C0D_C9C7_41A0_EF094875AE98.png",
 "top": "0%",
 "horizontalAlign": "left",
 "shadow": false,
 "height": "100%",
 "verticalAlign": "top",
 "paddingTop": 0,
 "maxWidth": 1095,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 1095,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "horizontalAlign": "right",
 "shadow": false,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "gap": 10,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 20,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "horizontalAlign": "right",
 "shadow": false,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "gap": 10,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 20,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "shadowBlurRadius": 25,
 "gap": 10,
 "shadowHorizontalLength": 0,
 "shadowOpacity": 0.3,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "left": "15%",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "horizontalAlign": "right",
 "shadow": false,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "gap": 10,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 20,
 "data": {
  "name": "Container X global"
 },
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "propagateClick": false,
 "id": "Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B",
 "paddingLeft": 0,
 "right": "35.76%",
 "fontColor": "#000000",
 "width": "19.12%",
 "minWidth": 1,
 "borderSize": 0,
 "text": "Label",
 "top": "32.43%",
 "horizontalAlign": "center",
 "fontSize": "1.48vmin",
 "shadow": false,
 "height": "10.135%",
 "verticalAlign": "middle",
 "fontStyle": "normal",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingRight": 0,
 "data": {
  "name": "Label53051"
 },
 "fontWeight": "normal",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_2_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B2304C6B_8D1B_CA4B_41B4_0B635E159451",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_2_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_928EBDA2_8C1B_4E4B_41D6_55F0062F90AF",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_2_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9E566D5C_8D14_CA4D_41DD_C27EC4E4D01A",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_7_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B23FDC6B_8D1B_CA4B_41D1_8E32A753855B",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_95DFAD56_8D0C_CA5C_41B2_7AAF0DAD63BA",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_95DF3D56_8D0C_CA5C_419D_E84DE65364C6",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_950083C8_8C0D_D9C7_41E1_3DCFCE79F11B",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99AEF173_8E54_D17B_41BC_6E39D60A899A",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_95DE3D56_8D0C_CA5C_41D3_3B6B078BD3C3",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_999F1DDC_8C17_49FF_41D1_7148472CAD13",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_95038849_8C0B_B6D9_41D8_9C3C3A884430",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_933F6DB3_8946_3671_41C6_3DCBED444A9B",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9677361D_8C1C_DA79_41D0_8C3BC2B8B13D",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_933FCDB3_8946_3671_41D6_83359D7C1DED",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9A11DC83_8C1C_CE49_41D3_95EECC4FD1E5",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9608861D_8C1C_DA79_41C0_7BFFFD82EF95",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_93419DB3_8946_3671_41DB_35C85E9C2199",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_933E6DB3_8946_3671_41AE_B3AB69789C6E",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9863CD8D_8C35_4E59_41C7_2281B7EC4694",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_95DEAD56_8D0C_CA5C_41D9_86FF7A9C3F5B",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_957B1E5E_8C15_CAFB_41B6_8EF338FC037A",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_957B7E5E_8C15_CAFB_41D6_FB0BBE7A02D6",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_2_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9E555D5C_8D14_CA4D_41D9_1D7B0E418DE1",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_95DF4D56_8D0C_CA5C_41C1_907EC8ED1775",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_2_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B230EC6B_8D1B_CA4B_41DC_4A91136AA259",
 "frameCount": 22,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_2_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_B2310C6B_8D1B_CA4B_41D3_7382A4D9962F",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_999EBDE2_8C17_49CB_41D9_DCDA7E8C9002",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_99911DE2_8C17_49CB_41CC_EACB6FA93044",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_91F6E777_8CF7_5AC9_41C5_4259D38EB1E9",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9C3E9FB5_8C1D_4A49_41C7_82F81ADCD25B",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_95752E58_8C15_CAC7_41C0_BC29890D8D41",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_957A8E5E_8C15_CAFB_41DE_8243F8FC07F7",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_2_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_92832D9C_8C1B_4E7E_41DE_8C2E0E3EE316",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_95772E58_8C15_CAC7_41DD_E2EDE6BB0AC3",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9C3F9FB5_8C1D_4A49_41CA_C45EE40106D5",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_9C3F5FB5_8C1D_4A49_41CD_E4D99FF14473",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "width": 36,
 "minWidth": 1,
 "borderSize": 0,
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "backgroundOpacity": 0.4,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 0,
 "data": {
  "name": "Container black"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "transparencyActive": true,
 "minHeight": 1,
 "propagateClick": true,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "paddingLeft": 0,
 "left": 10,
 "width": 50,
 "minWidth": 1,
 "borderSize": 0,
 "top": "40%",
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "bottom": "40%",
 "mode": "push",
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "paddingTop": 0,
 "maxWidth": 80,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 80,
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "minHeight": 30,
 "propagateClick": true,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "paddingLeft": 0,
 "width": "100%",
 "minWidth": 40,
 "borderSize": 0,
 "left": "0%",
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "top": "0%",
 "horizontalAlign": "left",
 "shadow": false,
 "height": "25%",
 "verticalAlign": "top",
 "paddingTop": 0,
 "maxWidth": 1095,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 1095,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Button_7DB31382_7065_343F_41D6_641BBE1B2562",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Button_7DBC8382_7065_343F_4183_17B44518DB40",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
  "this.Container_AEB9D8DA_8C1F_57FB_41DD_0759E8707B2F",
  "this.Button_AE9287F9_8C1F_79B9_41D4_B6234F05313D"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "top": "26.57%",
 "width": "100%",
 "bottom": "23.43%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "gap": 0,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 0,
 "data": {
  "name": "-Container buttons"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "bottom": "0%",
 "contentOpaque": false,
 "horizontalAlign": "left",
 "shadow": false,
 "layout": "vertical",
 "scrollBarMargin": 2,
 "height": "26.602%",
 "verticalAlign": "bottom",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 0,
 "data": {
  "name": "-Container footer"
 },
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "transparencyActive": true,
 "minHeight": 1,
 "propagateClick": true,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingLeft": 0,
 "width": 60,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "mode": "toggle",
 "height": 60,
 "shadow": false,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "maxHeight": 60,
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 }
},
{
 "transparencyActive": true,
 "minHeight": 1,
 "propagateClick": true,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "mode": "push",
 "height": 58,
 "shadow": false,
 "click": "this.shareTwitter(window.location.href)",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 58,
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "transparencyActive": true,
 "minHeight": 1,
 "propagateClick": true,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingLeft": 0,
 "width": 58,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "mode": "push",
 "height": 58,
 "shadow": false,
 "click": "this.shareFacebook(window.location.href)",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingTop": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 58,
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "85%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "layout": "absolute",
 "horizontalAlign": "center",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 }
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "minWidth": 460,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "50%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "layout": "vertical",
 "horizontalAlign": "left",
 "gap": 0,
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingRight": 50,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 }
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "propagateClick": false,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "75%",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingTop": 0,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "maxHeight": 60,
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 }
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "shadow": false,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 }
},
{
 "itemThumbnailWidth": 220,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "paddingLeft": 70,
 "scrollBarColor": "#04A3E1",
 "itemMode": "normal",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "minWidth": 1,
 "itemMaxWidth": 1000,
 "left": 0,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemMaxHeight": 1000,
 "scrollBarVisible": "rollOver",
 "itemLabelFontStyle": "italic",
 "width": "100%",
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailOpacity": 1,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBorderRadius": 0,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "horizontalAlign": "center",
 "itemPaddingLeft": 3,
 "shadow": false,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "height": "92%",
 "itemOpacity": 1,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "itemPaddingTop": 3,
 "class": "ThumbnailGrid",
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "paddingRight": 70,
 "propagateClick": false,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemThumbnailShadow": false,
 "borderRadius": 5,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelGap": 7,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 70
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "propagateClick": false,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "insetBorder": false,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "class": "WebFrame",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "propagateClick": false,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "75%",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingTop": 0,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "maxHeight": 60,
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 }
},
{
 "propagateClick": false,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "shadow": false,
 "layout": "absolute",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "gap": 10,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "paddingRight": 0,
 "data": {
  "name": "header"
 },
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "layout": "absolute",
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 }
},
{
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "55%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "layout": "absolute",
 "horizontalAlign": "center",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 }
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingLeft": 60,
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "minWidth": 460,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "45%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "layout": "vertical",
 "horizontalAlign": "left",
 "gap": 0,
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 }
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "propagateClick": false,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "width": "25%",
 "mode": "push",
 "horizontalAlign": "center",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "75%",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingTop": 0,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "maxHeight": 60,
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 }
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "shadow": false,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "propagateClick": true,
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Tour Info"
 },
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "width": 220,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "rollOverBackgroundOpacity": 0.8,
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "shadow": false,
 "label": "Main Lobby",
 "horizontalAlign": "left",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "gap": 5,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "paddingRight": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "minHeight": 1,
 "paddingBottom": 0,
 "fontWeight": "normal"
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "shadow": false,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "propagateClick": true,
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Panorama List"
 },
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "shadow": false,
 "label": "Perpustakaan",
 "horizontalAlign": "left",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "gap": 23,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B, false, 0, null, null, false); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "paddingRight": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "minHeight": 1,
 "paddingBottom": 0,
 "fontWeight": "normal"
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "shadow": false,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "propagateClick": true,
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Location"
 },
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Location",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "shadow": false,
 "label": "Student Corner",
 "horizontalAlign": "left",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B, false, 0, null, null, false); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "paddingRight": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "minHeight": 1,
 "paddingBottom": 0,
 "fontWeight": "normal"
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "shadow": false,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "propagateClick": true,
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Floorplan"
 },
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "shadow": false,
 "label": "Smart-Classroom",
 "horizontalAlign": "left",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 13); this.setComponentVisibility(this.Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B, false, 0, null, null, false); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_A952D41F_8D74_59CB_41AC_1C0312705211, 'showEffect', false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "paddingRight": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "minHeight": 1,
 "paddingBottom": 0,
 "fontWeight": "normal"
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "shadow": false,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "propagateClick": true,
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Photoalbum"
 },
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "shadow": false,
 "label": "Aula",
 "horizontalAlign": "left",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.setComponentVisibility(this.Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B, false, 0, null, null, false); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, true, 0, this.effect_A9A33083_8D74_FAB4_41DC_D18A2E5FB63E, 'showEffect', false); this.mainPlayList.set('selectedIndex', 23)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "paddingRight": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "minHeight": 1,
 "paddingBottom": 0,
 "fontWeight": "normal"
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "shadow": false,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "propagateClick": true,
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Contact"
 },
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "width": "100%",
 "mode": "push",
 "height": 50,
 "fontSize": 18,
 "shadow": false,
 "label": "Mushola",
 "horizontalAlign": "left",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "fontStyle": "italic",
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B, false, 0, null, null, false); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, true, 0, this.effect_A995265E_8D74_464D_41E1_82FDAEBA4CF7, 'showEffect', false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "paddingRight": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "minHeight": 1,
 "paddingBottom": 0,
 "fontWeight": "normal"
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "shadow": false,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_AEB9D8DA_8C1F_57FB_41DD_0759E8707B2F",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "shadow": false,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "propagateClick": true,
 "id": "Button_AE9287F9_8C1F_79B9_41D4_B6234F05313D",
 "paddingLeft": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Contact"
 },
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFCC33",
 "rollOverBackgroundOpacity": 0.8,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "width": "100%",
 "mode": "push",
 "height": 60,
 "fontSize": "20px",
 "shadow": false,
 "label": "PMB UBSI",
 "horizontalAlign": "left",
 "shadowBlurRadius": 6,
 "verticalAlign": "middle",
 "gap": 5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "fontStyle": "normal",
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "click": "this.openLink('https://pmbubsi.id/', '_blank')",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "paddingRight": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "minHeight": 1,
 "paddingBottom": 0,
 "fontWeight": "bold"
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "paddingLeft": 0,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "width": 40,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 2,
 "shadow": false,
 "layout": "horizontal",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "blue line"
 }
},
{
 "propagateClick": true,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>KAMPUS REKTORAT UBSI</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Jl. Kramat Raya No.98, RT.2/RW.9, Kwitang, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta www.bsi.ac.id</I></SPAN></SPAN></DIV></div>",
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "height": 96,
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingRight": 0,
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 0
},
{
 "transparencyActive": true,
 "minHeight": 1,
 "propagateClick": true,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "paddingLeft": 0,
 "width": 42,
 "minWidth": 1,
 "borderSize": 0,
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "mode": "push",
 "height": 42,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "paddingTop": 0,
 "maxWidth": 80,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "maxHeight": 80,
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "minHeight": 1,
 "propagateClick": false,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "paddingLeft": 0,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "left": "0%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "top": "0%",
 "horizontalAlign": "center",
 "shadow": false,
 "height": "100%",
 "verticalAlign": "middle",
 "paddingTop": 0,
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 1000,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 50,
 "shadow": false,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "horizontalAlign": "right",
 "paddingTop": 20,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "minWidth": 100,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "layout": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 300,
 "paddingBottom": 10,
 "data": {
  "name": "Container text"
 }
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "width": 370,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 30,
 "shadow": false,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "propagateClick": false,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "top": 20,
 "width": "100%",
 "mode": "push",
 "horizontalAlign": "right",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "36.14%",
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingTop": 0,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "maxHeight": 60,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "propagateClick": false,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "right": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "top": 20,
 "width": "100%",
 "mode": "push",
 "horizontalAlign": "right",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "36.14%",
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingTop": 0,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "maxHeight": 60,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "paddingLeft": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "minWidth": 1,
 "left": "0%",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipOpacity": 1,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "shadow": false,
 "progressBarBorderSize": 0,
 "height": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "transitionDuration": 500,
 "paddingBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "propagateClick": true,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "paddingLeft": 0,
 "left": 10,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "minWidth": 50,
 "borderSize": 0,
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "mode": "push",
 "horizontalAlign": "center",
 "shadow": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "propagateClick": true,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "minWidth": 50,
 "borderSize": 0,
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "mode": "push",
 "horizontalAlign": "center",
 "shadow": false,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "maxHeight": 60,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "transparencyActive": false,
 "minHeight": 50,
 "propagateClick": true,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "minWidth": 50,
 "borderSize": 0,
 "top": 20,
 "width": "10%",
 "mode": "push",
 "horizontalAlign": "right",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "10%",
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingTop": 0,
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "maxHeight": 60,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "minHeight": 1,
 "propagateClick": false,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "paddingLeft": 0,
 "width": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "left": "0%",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "top": "0%",
 "horizontalAlign": "center",
 "shadow": false,
 "height": "100%",
 "verticalAlign": "bottom",
 "paddingTop": 0,
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 1000,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image40635"
 },
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "right",
 "gap": 0,
 "height": "5%",
 "paddingTop": 20,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "minWidth": 100,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "layout": "vertical",
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 520,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 }
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "width": 370,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "shadow": false,
 "layout": "horizontal",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.99vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.76vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingRight": 10,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 20
},
{
 "textDecoration": "none",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button31015"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "paddingLeft": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "fontFamily": "Oswald",
 "pressedBackgroundOpacity": 1,
 "fontColor": "#FFFFFF",
 "width": 180,
 "minWidth": 1,
 "borderSize": 0,
 "shadowSpread": 1,
 "iconHeight": 32,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 1,
 "height": 50,
 "mode": "push",
 "fontSize": "2.39vh",
 "shadow": false,
 "label": "LOREM IPSUM",
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "horizontalAlign": "center",
 "layout": "horizontal",
 "fontStyle": "italic",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "paddingRight": 0,
 "class": "Button",
 "borderRadius": 50,
 "iconWidth": 32,
 "cursor": "hand",
 "minHeight": 1,
 "paddingBottom": 0,
 "fontWeight": "bold"
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.3vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarMargin": 2,
 "height": "46%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingRight": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 10
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingLeft": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "layout": "horizontal",
 "horizontalAlign": "left",
 "gap": 10,
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "class": "Container",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 }
},
{
 "minHeight": 1,
 "propagateClick": false,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "width": "25%",
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "horizontalAlign": "left",
 "shadow": false,
 "height": "100%",
 "verticalAlign": "top",
 "paddingTop": 0,
 "maxWidth": 200,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "maxHeight": 200,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "paddingRight": 0,
 "paddingBottom": 0
},
{
 "propagateClick": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.43vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.21vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.21vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.21vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.44vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "width": "75%",
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingRight": 10,
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10,
 "minHeight": 1,
 "paddingBottom": 10
}],
 "minHeight": 20,
 "paddingBottom": 0,
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
