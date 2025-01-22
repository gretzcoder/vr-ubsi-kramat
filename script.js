(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_90740B8F_8C0B_4A59_41D6_852554C921C8]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_81572D86_8E5C_D19D_41D8_88393CDDC4D9], 'cardboardAvailable'); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_9BA4DAF7_8E6F_737B_41D1_5A5DF7C57DA4.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_80B094D1_8E5C_F7B7_41E1_9309E37AB7C3,this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Player",
 "backgroundPreloadEnabled": true,
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
  "this.Label_91245760_8D0C_4674_41E1_819C525ED2B6"
 ],
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": [
  "this.IconButton_80B094D1_8E5C_F7B7_41E1_9309E37AB7C3",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "scripts": {
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "existsKey": function(key){  return key in window; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top",
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "gap": 10,
 "height": "100%",
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "downloadEnabled": false,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "layout": "absolute",
 "overflow": "visible",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -69.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_997D5BCB_8E6F_71AB_41DD_EC67BEC9D481"
},
{
 "items": [
  {
   "media": "this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_camera"
  },
  {
   "media": "this.panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_camera"
  },
  {
   "media": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_camera"
  },
  {
   "media": "this.panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_camera"
  },
  {
   "media": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236_camera"
  },
  {
   "media": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_camera"
  },
  {
   "media": "this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_camera"
  },
  {
   "media": "this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_camera"
  },
  {
   "media": "this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_camera"
  },
  {
   "media": "this.panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_camera"
  },
  {
   "media": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_camera"
  },
  {
   "media": "this.panorama_91D0890C_88D6_E89F_41BB_A2F05281772E",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_camera"
  },
  {
   "media": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_camera"
  },
  {
   "media": "this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_camera"
  },
  {
   "media": "this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_camera"
  },
  {
   "media": "this.panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_camera"
  },
  {
   "media": "this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_camera"
  },
  {
   "media": "this.panorama_A7F8496B_8C15_F6D9_41C3_93D586540138",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_camera"
  },
  {
   "media": "this.panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_camera"
  },
  {
   "media": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_camera"
  },
  {
   "media": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_camera"
  },
  {
   "media": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_camera"
  },
  {
   "media": "this.panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_camera"
  },
  {
   "media": "this.panorama_A76A0622_8D74_59F5_416E_36630276E68C",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A76A0622_8D74_59F5_416E_36630276E68C_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -39.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_9929AC01_8E6F_7697_41CA_CA91F6A0E62F"
},
{
 "items": [
  {
   "media": "this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_camera"
  },
  {
   "media": "this.panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_camera"
  },
  {
   "media": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_camera"
  },
  {
   "media": "this.panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_camera"
  },
  {
   "media": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236_camera"
  },
  {
   "media": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_camera"
  },
  {
   "media": "this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_camera"
  },
  {
   "media": "this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_camera"
  },
  {
   "media": "this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_camera"
  },
  {
   "media": "this.panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_camera"
  },
  {
   "media": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_camera"
  },
  {
   "media": "this.panorama_91D0890C_88D6_E89F_41BB_A2F05281772E",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_camera"
  },
  {
   "media": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_camera"
  },
  {
   "media": "this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_camera"
  },
  {
   "media": "this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_camera"
  },
  {
   "media": "this.panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_camera"
  },
  {
   "media": "this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_camera"
  },
  {
   "media": "this.panorama_A7F8496B_8C15_F6D9_41C3_93D586540138",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_camera"
  },
  {
   "media": "this.panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_camera"
  },
  {
   "media": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_camera"
  },
  {
   "media": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_camera"
  },
  {
   "media": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_camera"
  },
  {
   "media": "this.panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_camera"
  },
  {
   "media": "this.panorama_A76A0622_8D74_59F5_416E_36630276E68C",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
   "camera": "this.panorama_A76A0622_8D74_59F5_416E_36630276E68C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_90740B8F_8C0B_4A59_41D6_852554C921C8.mp3",
  "oggUrl": "media/audio_90740B8F_8C0B_4A59_41D6_852554C921C8.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_90740B8F_8C0B_4A59_41D6_852554C921C8",
 "data": {
  "label": "Mars BSI_01"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 36.6,
   "backwardYaw": 179.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7"
  }
 ],
 "hfov": 360,
 "label": "Ruang Lab",
 "id": "panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1",
 "thumbnailUrl": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9FC84D6F_8D14_4A4B_41D5_7683C98ED125",
  "this.overlay_9ED6FC8A_8D14_CAB5_41B7_7EF043DCC4D6"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 74.39,
  "class": "PanoramaCameraPosition",
  "pitch": -3.47
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_camera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5"
  },
  {
   "yaw": 140.43,
   "backwardYaw": -95.34,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "GedungAwal_2",
 "id": "panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739",
 "thumbnailUrl": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9AF8D335_895E_3270_41C4_87C5FD20370B",
  "this.overlay_9D8D3FFE_895E_D1F3_41D8_AEB894191346",
  "this.overlay_9BB11B05_8C3B_4A49_41D4_81DA468E0C4D"
 ]
},
{
 "duration": 500,
 "id": "effect_A952D41F_8D74_59CB_41AC_1C0312705211",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 135.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_9863DB15_8E6F_72BF_41D0_022868FAB1D8"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6"
  }
 ],
 "hfov": 360,
 "label": "Masjid",
 "id": "panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5",
 "thumbnailUrl": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9CC32916_894E_7E30_41B6_7615C2ACD1DF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -55.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_99C7EC6F_8E6F_776B_41D2_C111A746FB3C"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -2.14,
   "backwardYaw": -3.65,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7F8496B_8C15_F6D9_41C3_93D586540138",
   "distance": 1
  },
  {
   "yaw": 172.7,
   "backwardYaw": -34.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Ruang Dosen",
 "id": "panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926",
 "thumbnailUrl": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_0_t.jpg",
   "overlays": [
    "this.overlay_9C3571CC_8CFC_5A4D_41E0_33D0B0AAE3F1"
   ]
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9DE8104A_8CF5_F9B4_41DD_00443EFDF54D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 23.46,
  "class": "PanoramaCameraPosition",
  "pitch": 1.11
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_camera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 124.11,
   "backwardYaw": -61.17,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F",
   "distance": 1
  },
  {
   "yaw": -13.67,
   "backwardYaw": 40.97,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Aula 3",
 "id": "panorama_A76A0622_8D74_59F5_416E_36630276E68C",
 "thumbnailUrl": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_A31A3490_8D0C_7AD5_41CD_7698A67B6295",
  "this.overlay_A308868D_8D0C_46CC_41CF_EE63A2FDE828"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 45.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_98D44B88_8E6F_7195_41D2_811B9DF3A37F"
},
{
 "duration": 500,
 "id": "effect_90CCD28C_8D15_FECD_41D1_A4C27A4CD341",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_985C6B33_8E6F_72FB_41DA_92510643F959"
},
{
 "duration": 500,
 "id": "effect_A995265E_8D74_464D_41E1_82FDAEBA4CF7",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236"
  }
 ],
 "hfov": 360,
 "label": "Perpus_2",
 "id": "panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046",
 "thumbnailUrl": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_83B6C1DB_8C1B_B9F9_41B8_420B08F71E37",
  "this.overlay_9C46BBA6_8C1D_4A4B_41D2_C6C8DBD28AE7"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1"
  }
 ],
 "hfov": 360,
 "label": "Lorong Kelas",
 "id": "panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6",
 "thumbnailUrl": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9DB635CE_8CF4_7A4D_41C8_2BD046C599FA",
  "this.overlay_90C2660A_8D14_F9B4_41D9_D2C7CBC29163"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -167.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_983CFB4B_8E6F_72AB_41E0_9821B586D400"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 59.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_99D58C5C_8E6F_76AD_41C0_6A722040976F"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -154.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_98194B64_8E6F_729D_41C3_F68DEF97D6A3"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 46.63,
   "backwardYaw": 23.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F",
   "distance": 1
  },
  {
   "yaw": 25.08,
   "backwardYaw": -142.1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6"
  },
  {
   "yaw": 32.27,
   "backwardYaw": 10.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Lift",
 "id": "panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
 "thumbnailUrl": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
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
 "duration": 500,
 "id": "effect_93917DF0_8D1B_CA55_41CE_794A0F2120BF",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "viewerArea": "this.viewer_uidA44E627D_8C35_DAB9_41E1_0B8C4A60764A",
 "id": "viewer_uidA44E627D_8C35_DAB9_41E1_0B8C4A60764AVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 103.95,
  "class": "PanoramaCameraPosition",
  "pitch": 6.77
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 166.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_995FFBE2_8E6F_7195_41D2_6206EFC98BCB"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": -74.2,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -74.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0.97
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": 0.97,
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "automaticRotationSpeed": 4
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236"
  }
 ],
 "hfov": 360,
 "label": "Perpus_3",
 "id": "panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B",
 "thumbnailUrl": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_99A2D19F_8C0D_7679_41C4_D083DDC68A3F",
  "this.overlay_9967CA07_8C0D_4A49_41C8_93E51BBBE86F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 40.97,
   "backwardYaw": -13.67,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A76A0622_8D74_59F5_416E_36630276E68C",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Aula 2",
 "id": "panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436",
 "thumbnailUrl": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_A3248498_8D0C_DAD5_41C3_34B7A750DCB8"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713"
  },
  {
   "yaw": -95.34,
   "backwardYaw": 140.43,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Gedung_Awal",
 "id": "panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6",
 "thumbnailUrl": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9BD67659_895A_7230_41C6_4A6B78CA969F",
  "this.overlay_9A6C3B02_8946_7210_41DC_3BD3D4A2B708"
 ]
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_9B4BFFE2_8D14_C675_41C3_CD2DC22C82C1",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_9BA40AF7_8E6F_737B_41E1_136960E867FB",
 "class": "PlayList"
},
{
 "duration": 500,
 "id": "effect_AD93DFF1_8D0C_C657_41DA_38A499715505",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -66.41,
   "backwardYaw": 74.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Ruang Smart Classroom",
 "id": "panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
 "thumbnailUrl": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9905F750_8D1C_4655_41D1_9B3857C41058"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -69.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 10.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0.58
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -169.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_98089B6A_8E6F_7295_41D4_DC922D7F63AE"
},
{
 "duration": 500,
 "id": "effect_A2CEC0AA_8D74_DAF5_41DC_A46FDC661A04",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -120.18,
   "backwardYaw": 23.28,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F",
   "distance": 1
  },
  {
   "yaw": 150.42,
   "backwardYaw": 12.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED"
  },
  {
   "yaw": -142.1,
   "backwardYaw": 25.08,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
   "distance": 1
  },
  {
   "yaw": -134.86,
   "backwardYaw": 25.08,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
   "distance": 1
  },
  {
   "yaw": -134.78,
   "backwardYaw": 10.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Ruang Tunggu",
 "id": "panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD",
 "thumbnailUrl": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_t.jpg",
   "overlays": [
    "this.overlay_96CB866B_8D34_464B_41D2_9269E55BBAD5"
   ]
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
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
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -139.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_99FA3C38_8E6F_76F5_41DD_C04F577777CA"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_991BEC0D_8E6F_76AF_41E1_48469563FC48"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -51.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0.64
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -147.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_99968CA4_8E6F_779D_41D6_64F382E39BE2"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7"
  },
  {
   "yaw": 74.86,
   "backwardYaw": -66.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Ruang Smart Classroom 2",
 "id": "panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258",
 "thumbnailUrl": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0_t.jpg",
   "overlays": [
    "this.overlay_980224A1_8D1C_BAF7_41CD_BA5645158502"
   ]
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9ED939E6_8D1D_CA7D_41BC_9D38FFEB7247"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_922DBEA9_88D7_A986_41D8_0414006B6236"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B"
  }
 ],
 "hfov": 360,
 "label": "ADM_perpus",
 "id": "panorama_9249EE30_88D6_A887_41D4_F1857C016DB0",
 "thumbnailUrl": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9DBEC322_894A_D213_41C5_CB3EF135184E",
  "this.overlay_9C25611D_894A_EE31_41D6_73A4F566270C",
  "this.overlay_90163569_8C0D_5ED9_41E0_02DCB00FED17"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 145.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_96700CC9_8E6F_7797_41C2_394B85082368"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -156.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_9890ABAC_8E6F_71ED_41B3_F3CFE9523AAB"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 32.52,
   "backwardYaw": 30.62,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F",
   "distance": 1
  },
  {
   "yaw": 10.55,
   "backwardYaw": -134.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED"
  },
  {
   "yaw": 10.37,
   "backwardYaw": 32.27,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
   "distance": 1
  },
  {
   "yaw": 17.6,
   "backwardYaw": 32.27,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
   "distance": 1
  },
  {
   "yaw": -34.16,
   "backwardYaw": 172.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Lift 2",
 "id": "panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC",
 "thumbnailUrl": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
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
 "duration": 500,
 "id": "effect_AD1C7D36_8D14_4BDD_41DD_C6EFA4F651D6",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -147.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_98C7BB8E_8E6F_71AD_419E_4AABB1B14B92"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 99.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_98FBDB76_8E6F_717D_41CE_A9E28B995ACD"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -133.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_99B74C81_8E6F_7797_41C5_55465B3AF467"
},
{
 "gyroscopeEnabled": true,
 "buttonCardboardView": [
  "this.IconButton_81572D86_8E5C_D19D_41D8_88393CDDC4D9",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -130.2,
   "backwardYaw": -44.53,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "StudentCorner_2",
 "id": "panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C",
 "thumbnailUrl": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9899F433_8C17_BE4A_41C0_1A5BEFF017F6"
 ]
},
{
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "image": {
  "class": "ImageResource",
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
  ]
 },
 "label": "Panduan Lantai UBSI Kramat 98",
 "id": "map_9B4BFFE2_8D14_C675_41C3_CD2DC22C82C1",
 "thumbnailUrl": "media/map_9B4BFFE2_8D14_C675_41C3_CD2DC22C82C1_t.jpg",
 "width": 1920,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "class": "Map",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "height": 1080,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "adjacentPanoramas": [
  {
   "yaw": 23.28,
   "backwardYaw": -120.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD",
   "distance": 1
  },
  {
   "yaw": -61.17,
   "backwardYaw": 124.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A76A0622_8D74_59F5_416E_36630276E68C",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED"
  },
  {
   "yaw": 23.3,
   "backwardYaw": 46.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
   "distance": 1
  },
  {
   "yaw": 30.88,
   "backwardYaw": 46.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7",
   "distance": 1
  },
  {
   "yaw": 30.62,
   "backwardYaw": 32.52,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Aula 1",
 "id": "panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F",
 "thumbnailUrl": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
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
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -105.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_994F8BE9_8E6F_7197_41B3_8E71E984C337"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -57.53,
  "class": "PanoramaCameraPosition",
  "pitch": -4.38
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_922DBEA9_88D7_A986_41D8_0414006B6236_camera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -3.65,
   "backwardYaw": -2.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Ruang Dosen 2",
 "id": "panorama_A7F8496B_8C15_F6D9_41C3_93D586540138",
 "thumbnailUrl": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1_t.jpg",
 "class": "LivePanorama",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_0_t.jpg",
   "overlays": [
    "this.overlay_9C3F52BB_8CF4_5ED4_41D4_1CA2F98C3569"
   ]
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.24,
  "class": "PanoramaCameraPosition",
  "pitch": 2.73
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_camera"
},
{
 "items": [
  {
   "media": "this.video_90EACF8E_8C34_CA5A_41C7_255144D12B1E",
   "start": "this.viewer_uidA44E627D_8C35_DAB9_41E1_0B8C4A60764AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_9BA4EAF7_8E6F_737B_41CF_6D3FAE00D4F7, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_9BA4EAF7_8E6F_737B_41CF_6D3FAE00D4F7, 0)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidA44E627D_8C35_DAB9_41E1_0B8C4A60764AVideoPlayer)",
   "player": "this.viewer_uidA44E627D_8C35_DAB9_41E1_0B8C4A60764AVideoPlayer"
  }
 ],
 "id": "playList_9BA4EAF7_8E6F_737B_41CF_6D3FAE00D4F7",
 "class": "PlayList"
},
{
 "duration": 500,
 "id": "effect_AD904FE4_8D0C_C67D_41C1_41BAB0D41AE3",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "label": "Hyperlapse_Gedung_Wsound (1)(1)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_90EACF8E_8C34_CA5A_41C7_255144D12B1E_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_90EACF8E_8C34_CA5A_41C7_255144D12B1E",
 "class": "Video",
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
   "yaw": 20.72,
   "backwardYaw": -80.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Ruang Administrasi",
 "id": "panorama_91D0890C_88D6_E89F_41BB_A2F05281772E",
 "thumbnailUrl": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_98CDF005_8C1D_7649_41D6_9CCBC7608A16"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_camera"
},
{
 "duration": 500,
 "id": "effect_AD1BED40_8D14_4BB5_41E1_20F868977652",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 13.52,
  "class": "PanoramaCameraPosition",
  "pitch": -0.32
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_camera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 12.24,
   "backwardYaw": 150.42,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD",
   "distance": 1
  },
  {
   "yaw": -80.45,
   "backwardYaw": 20.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_91D0890C_88D6_E89F_41BB_A2F05281772E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0"
  }
 ],
 "hfov": 360,
 "label": "Lobby",
 "id": "panorama_929FE66E_88D5_989B_41E0_FB789A9E3713",
 "thumbnailUrl": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9D128FA4_895A_5217_41CF_35CDEDCAC302",
  "this.overlay_9D2A145E_8946_5633_41BD_77A4E40C0018",
  "this.overlay_9A2EE295_894A_5230_41C0_9DECA94F20A6"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -29.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_98699B21_8E6F_7297_41E0_351150F4886E"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 5.18,
  "class": "PanoramaCameraPosition",
  "pitch": -9.12
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -156.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_98311B45_8E6F_729F_41B8_38D8A465D506"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_camera"
},
{
 "duration": 500,
 "id": "effect_9274D1EE_8D15_BA4D_41D5_879A85524051",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "duration": 500,
 "id": "effect_A2D2F0AA_8D74_DAF5_41C0_FD150229F63E",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 77.22,
  "class": "PanoramaCameraPosition",
  "pitch": 4.45
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -37.31,
  "class": "PanoramaCameraPosition",
  "pitch": 1.68
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_camera"
},
{
 "duration": 500,
 "id": "effect_A9A33083_8D74_FAB4_41DC_D18A2E5FB63E",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -83.74,
  "class": "PanoramaCameraPosition",
  "pitch": 3.51
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -50.1,
  "class": "PanoramaCameraPosition",
  "pitch": 2.47
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -10.25,
  "class": "PanoramaCameraPosition",
  "pitch": 2.8
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A76A0622_8D74_59F5_416E_36630276E68C_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_99868CB7_8E6F_77FB_41D1_63939675741D"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B"
  }
 ],
 "hfov": 360,
 "label": "Perpus_1",
 "id": "panorama_922DBEA9_88D7_A986_41D8_0414006B6236",
 "thumbnailUrl": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_t.jpg",
   "overlays": [
    "this.overlay_832B361E_8C14_BA7A_41B0_986DC6718355"
   ]
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_984A804E_8C15_56DB_41C7_DF2721A8F2BA",
  "this.overlay_995702D6_8C15_DBCB_41C9_15D7475FDE96"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_984AEB39_8E6F_72F7_41DC_9CCF9EA88F07",
 "automaticRotationSpeed": 4
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -154.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_982E1B57_8E6F_72BB_41BE_B107E1288B7D"
},
{
 "duration": 500,
 "id": "effect_AD0D37B6_8D1C_46DD_41DF_58FED68C8CA2",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_9B4BFFE2_8D14_C675_41C3_CD2DC22C82C1",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_9BA4DAF7_8E6F_737B_41D1_5A5DF7C57DA4",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 37.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_98832BB8_8E6F_71F5_41B4_E061D6BCDC6E"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 118.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_990A7C26_8E6F_769D_41D0_EA6BE811AD56"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -169.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_9972DBBE_8E6F_71ED_41D0_9AB64AC36E52"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 179.9,
   "backwardYaw": 36.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1",
   "distance": 1
  }
 ],
 "hfov": 360,
 "label": "Ruang Lab 2",
 "id": "panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A",
 "thumbnailUrl": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_9E1F3976_8D14_CA5C_41CB_75C062804E3B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -149.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_98E5DB7C_8E6F_716D_41DC_A50D42587A9C"
},
{
 "duration": 500,
 "id": "effect_93E7A2AF_8D14_7ECB_41B5_9394D918AAF8",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 113.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_99E5AC4A_8E6F_7695_41A7_30D45C69872D"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -44.53,
   "backwardYaw": -130.2,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9249EE30_88D6_A887_41D4_F1857C016DB0"
  }
 ],
 "hfov": 360,
 "label": "StudentCorner_1",
 "id": "panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B",
 "thumbnailUrl": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1_t.jpg",
 "pitch": 0,
 "hfovMin": "120%",
 "frameDisplayTime": 5000,
 "class": "LivePanorama",
 "hfovMax": 130,
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  },
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_1/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "frameTransitionTime": 5000,
 "overlays": [
  "this.overlay_98EDEF87_8C15_4A49_41D8_03EEB3639072",
  "this.overlay_98DD934E_8C1F_5ADA_41DF_3707D51B707C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -143.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_99390BF5_8E6F_717F_41BD_640BFAE68805"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 39.54,
  "class": "PanoramaCameraPosition",
  "pitch": -1.88
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -41.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0.66
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 54.5,
  "class": "PanoramaCameraPosition",
  "pitch": -1.34
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_camera"
},
{
 "duration": 500,
 "id": "effect_92536B55_8D1C_4E5C_41DD_475D209523CB",
 "easing": "linear",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_98A6FBA6_8E6F_719D_41E1_8D6BFFCD8E44"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 49.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_996DCBD7_8E6F_71BB_41DC_3F519317E8EF"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -159.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_98569B27_8E6F_729B_41D2_C5240A768017"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 17.26,
  "class": "PanoramaCameraPosition",
  "pitch": -2.88
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -147.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_98B60B9A_8E6F_71B5_4196_CD944C9D1238"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -133.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0.33
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_camera"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -133.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_99A69C93_8E6F_77BB_41DE_5FE6014FE1A1"
},
{
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
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
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "borderSize": 0,
 "width": 300,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "height": "100%",
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--- LEFT PANEL"
 }
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "borderSize": 0,
 "width": 115.05,
 "minHeight": 1,
 "paddingTop": 0,
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "height": 641,
 "top": "0%",
 "gap": 10,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "visible": false,
 "overflow": "scroll",
 "data": {
  "name": "-- SETTINGS"
 }
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "children": [
  "this.Image_911F6BD8_8C0D_C9C7_41A0_EF094875AE98"
 ],
 "borderSize": 0,
 "width": 550,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": 34,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "height": 140,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "visible",
 "data": {
  "name": "--STICKER"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--INFO photo"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--LOCATION"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--REALTOR"
 }
},
{
 "maxHeight": 1095,
 "propagateClick": true,
 "id": "Image_9194E92A_8C0F_565B_41D3_236046784B7C",
 "paddingRight": 0,
 "class": "Image",
 "right": "3.5%",
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_9194E92A_8C0F_565B_41D3_236046784B7C.png",
 "minHeight": 30,
 "horizontalAlign": "left",
 "width": "5.73%",
 "verticalAlign": "top",
 "minWidth": 40,
 "height": "11.797%",
 "top": "12.32%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "paddingTop": 0,
 "maxWidth": 1095,
 "data": {
  "name": "Image Company"
 }
},
{
 "maxHeight": 1095,
 "propagateClick": true,
 "id": "Image_91E16A83_8C0B_CA49_41DD_8A1AA88254D7",
 "paddingRight": 0,
 "class": "Image",
 "right": "0.97%",
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_91E16A83_8C0B_CA49_41DD_8A1AA88254D7.png",
 "minHeight": 30,
 "horizontalAlign": "left",
 "width": "8.387%",
 "verticalAlign": "top",
 "minWidth": 40,
 "height": "5.733%",
 "top": "5.73%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "paddingTop": 0,
 "maxWidth": 1095,
 "data": {
  "name": "Image Company"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_A9D0C119_8C0B_B646_41D8_01838B21DA87",
 "left": "25.63%",
 "shadowVerticalLength": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container52057"
 },
 "paddingRight": 0,
 "class": "Container",
 "layout": "absolute",
 "children": [
  "this.Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "shadowHorizontalLength": 3,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "top": "9.04%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000033",
  "#000099"
 ],
 "shadowBlurRadius": 6,
 "gap": 10,
 "horizontalAlign": "left",
 "shadowOpacity": 0.15,
 "height": "32.635%",
 "shadow": true,
 "backgroundOpacity": 0.5,
 "paddingBottom": 0,
 "shadowSpread": 1,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "width": "31.544%",
 "propagateClick": false
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "textShadowVerticalLength": 3,
 "id": "Label_97591067_8D3C_5A7B_41C9_023909B4D215",
 "textShadowHorizontalLength": 3,
 "paddingLeft": 0,
 "data": {
  "name": "SmartClassroom"
 },
 "paddingRight": 0,
 "class": "Label",
 "right": "0.48%",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "minHeight": 1,
 "textShadowOpacity": 0.7,
 "horizontalAlign": "center",
 "text": "Smart-Classroom UBSI",
 "width": "19.24%",
 "bottom": "1.76%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "22px",
 "textShadowColor": "#000000",
 "height": "9.151%",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "textShadowBlurRadius": 3
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "textShadowVerticalLength": 3,
 "id": "Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE",
 "textShadowHorizontalLength": 3,
 "paddingLeft": 0,
 "data": {
  "name": "Laboratorium"
 },
 "paddingRight": 0,
 "class": "Label",
 "right": "0%",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "minHeight": 1,
 "textShadowOpacity": 0.7,
 "horizontalAlign": "center",
 "text": "Laboratorium",
 "width": "19.24%",
 "bottom": "1.87%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "22px",
 "textShadowColor": "#000000",
 "height": "9.151%",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "textShadowBlurRadius": 3
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "textShadowVerticalLength": 3,
 "id": "Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B",
 "textShadowHorizontalLength": 3,
 "paddingLeft": 0,
 "data": {
  "name": "Mushola"
 },
 "paddingRight": 0,
 "class": "Label",
 "right": "0%",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "minHeight": 1,
 "textShadowOpacity": 0.7,
 "horizontalAlign": "center",
 "text": "Mushola",
 "width": "19.24%",
 "bottom": "1.87%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "22px",
 "textShadowColor": "#000000",
 "height": "9.151%",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "textShadowBlurRadius": 3
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "textShadowVerticalLength": 3,
 "id": "Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29",
 "textShadowHorizontalLength": 3,
 "paddingLeft": 0,
 "data": {
  "name": "Ruang Dosen"
 },
 "paddingRight": 0,
 "class": "Label",
 "right": "0%",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "minHeight": 1,
 "textShadowOpacity": 0.7,
 "horizontalAlign": "center",
 "text": "Ruang Dosen",
 "width": "19.24%",
 "bottom": "1.87%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "22px",
 "textShadowColor": "#000000",
 "height": "9.151%",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "textShadowBlurRadius": 3
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "textShadowVerticalLength": 3,
 "id": "Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B",
 "textShadowHorizontalLength": 3,
 "paddingLeft": 0,
 "data": {
  "name": "aula"
 },
 "paddingRight": 0,
 "class": "Label",
 "right": "0%",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "minHeight": 1,
 "textShadowOpacity": 0.7,
 "horizontalAlign": "center",
 "text": "Ruang Serbaguna (Aula)",
 "width": "19.24%",
 "bottom": "1.87%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "22px",
 "textShadowColor": "#000000",
 "height": "9.151%",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "textShadowBlurRadius": 3
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "textShadowVerticalLength": 3,
 "id": "Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2",
 "textShadowHorizontalLength": 3,
 "paddingLeft": 0,
 "data": {
  "name": "Perpus"
 },
 "paddingRight": 0,
 "class": "Label",
 "right": "0%",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "minHeight": 1,
 "textShadowOpacity": 0.7,
 "horizontalAlign": "center",
 "text": "Perpustakaan",
 "width": "19.24%",
 "bottom": "1.87%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "22px",
 "textShadowColor": "#000000",
 "height": "9.151%",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "textShadowBlurRadius": 3
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "textShadowVerticalLength": 3,
 "id": "Label_960AE679_8D0C_4654_41E0_13C0164AE489",
 "textShadowHorizontalLength": 3,
 "paddingLeft": 0,
 "data": {
  "name": "Student Corner"
 },
 "paddingRight": 0,
 "class": "Label",
 "right": "0%",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "minHeight": 1,
 "textShadowOpacity": 0.7,
 "horizontalAlign": "center",
 "text": "Student Corner",
 "width": "19.24%",
 "bottom": "1.87%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "22px",
 "textShadowColor": "#000000",
 "height": "9.151%",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "textShadowBlurRadius": 3
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "propagateClick": false,
 "textShadowVerticalLength": 3,
 "id": "Label_91245760_8D0C_4674_41E1_819C525ED2B6",
 "textShadowHorizontalLength": 3,
 "paddingLeft": 0,
 "data": {
  "name": "Administrasi"
 },
 "paddingRight": 0,
 "class": "Label",
 "right": "0%",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "minHeight": 1,
 "textShadowOpacity": 0.7,
 "horizontalAlign": "center",
 "text": "Ruang Administrasi",
 "width": "19.24%",
 "bottom": "1.87%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "22px",
 "textShadowColor": "#000000",
 "height": "9.151%",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "fontWeight": "bold",
 "textShadowBlurRadius": 3
},
{
 "transparencyActive": true,
 "maxHeight": 128,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "id": "IconButton_80B094D1_8E5C_F7B7_41E1_9309E37AB7C3",
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": "0.33%",
 "paddingLeft": 0,
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "width": 56,
 "minHeight": 1,
 "toolTip": "Fullscreen",
 "toolTipPaddingTop": 4,
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "iconURL": "skin/IconButton_80B094D1_8E5C_F7B7_41E1_9309E37AB7C3.png",
 "bottom": "0.8%",
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "mode": "toggle",
 "verticalAlign": "middle",
 "toolTipTextShadowBlurRadius": 3,
 "horizontalAlign": "center",
 "height": 34,
 "toolTipBorderSize": 1,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "shadow": false,
 "toolTipPaddingRight": 6,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "paddingTop": 0,
 "toolTipFontStyle": "normal",
 "cursor": "hand",
 "toolTipShadowVerticalLength": 0,
 "maxWidth": 128,
 "data": {
  "name": "IconButton1493"
 },
 "toolTipTextShadowOpacity": 0
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A, this.camera_985C6B33_8E6F_72FB_41DA_92510643F959); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9FC84D6F_8D14_4A4B_41D5_7683C98ED125",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.14,
   "yaw": 36.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9ED6FC8A_8D14_CAB5_41B7_7EF043DCC4D6",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.71,
   "yaw": 129.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9AF8D335_895E_3270_41C4_87C5FD20370B",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.41,
   "yaw": -32.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9D8D3FFE_895E_D1F3_41D8_AEB894191346",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.46,
   "yaw": 29.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6, this.camera_984AEB39_8E6F_72F7_41DC_9CCF9EA88F07); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9BB11B05_8C3B_4A49_41D4_81DA468E0C4D",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.93,
   "yaw": 140.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9CC32916_894E_7E30_41B6_7615C2ACD1DF",
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.15,
   "yaw": -162.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7F8496B_8C15_F6D9_41C3_93D586540138, this.camera_99868CB7_8E6F_77FB_41D1_63939675741D); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9C3571CC_8CFC_5A4D_41E0_33D0B0AAE3F1",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.92,
   "yaw": -2.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_2_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_2_HS_0_0.png",
      "width": 369,
      "class": "ImageResourceLevel",
      "height": 282
     }
    ]
   },
   "hfov": 16.17,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.88,
   "yaw": 172.7
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC, this.camera_96700CC9_8E6F_7797_41C2_394B85082368); this.mainPlayList.set('selectedIndex', 20); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9DE8104A_8CF5_F9B4_41DD_00443EFDF54D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.17,
   "yaw": 172.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_2_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436, this.camera_99FA3C38_8E6F_76F5_41DD_C04F577777CA); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A31A3490_8D0C_7AD5_41CD_7698A67B6295",
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.34,
   "yaw": -13.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_2_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F, this.camera_990A7C26_8E6F_769D_41D0_EA6BE811AD56); this.mainPlayList.set('selectedIndex', 21); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A308868D_8D0C_46CC_41CF_EE63A2FDE828",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.25,
   "yaw": 124.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_2_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_83B6C1DB_8C1B_B9F9_41B8_420B08F71E37",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.37,
   "yaw": 78.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9C46BBA6_8C1D_4A4B_41D2_C6C8DBD28AE7",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.1,
   "yaw": -73.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_2_HS_0_0.png",
      "width": 320,
      "class": "ImageResourceLevel",
      "height": 291
     }
    ]
   },
   "hfov": 14.05,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.7,
   "yaw": 36.3
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9DB635CE_8CF4_7A4D_41C8_2BD046C599FA",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.05,
   "yaw": 36.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_2_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0_HS_1_0.png",
      "width": 320,
      "class": "ImageResourceLevel",
      "height": 291
     }
    ]
   },
   "hfov": 14.05,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.7,
   "yaw": 80.52
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, true, 0, this.effect_9274D1EE_8D15_BA4D_41D5_879A85524051, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_90C2660A_8D14_F9B4_41D9_D2C7CBC29163",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.05,
   "yaw": 80.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E9A272_8C15_7ACB_41DD_E798CD7839C6_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9CE0D7B9_8D0D_C6D7_41E0_6372FC858E42",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.57,
   "yaw": -53.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_2_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_1_0.png",
      "width": 971,
      "class": "ImageResourceLevel",
      "height": 545
     }
    ]
   },
   "hfov": 42.64,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.88,
   "yaw": 41.55
  }
 ],
 "id": "overlay_AD8AC070_8D0C_FA55_41D8_758ABA163999",
 "maps": [
  {
   "hfov": 42.64,
   "yaw": 41.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_AD904FE4_8D0C_C67D_41C1_41BAB0D41AE3, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD8A2070_8D0C_FA55_4186_2A66A2638B1C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.98,
   "yaw": 39.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_2_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_AD93DFF1_8D0C_C657_41DA_38A499715505, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD8A0070_8D0C_FA55_41E0_18ED14FDE4CB",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 46.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_3_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD8A1070_8D0C_FA55_41D3_2CB4B5F7D4A4",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.79,
   "yaw": 24.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_4_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC, this.camera_9972DBBE_8E6F_71ED_41D0_9AB64AC36E52); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD8A4070_8D0C_FA55_41D6_A4590EB43CAD",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 32.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_5_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F, this.camera_9890ABAC_8E6F_71ED_41B3_F3CFE9523AAB); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD8DA070_8D0C_FA55_41DD_00621318A491",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.79,
   "yaw": 46.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_6_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD, this.camera_98832BB8_8E6F_71F5_41B4_E061D6BCDC6E); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD8D8070_8D0C_FA55_41D3_C34B38026317",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.98,
   "yaw": 25.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_0_HS_7_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea57618"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "viewer_uidA44E627D_8C35_DAB9_41E1_0B8C4A60764A",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "class": "ViewerArea",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
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
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
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
 "toolTipPaddingTop": 4,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_997D5BCB_8E6F_71AB_41DD_EC67BEC9D481, this.panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B); this.startPanoramaWithCamera(this.panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046, this.camera_997D5BCB_8E6F_71AB_41DD_EC67BEC9D481); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_99A2D19F_8C0D_7679_41C4_D083DDC68A3F",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.98,
   "yaw": 72.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0_HS_2_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9967CA07_8C0D_4A49_41C8_93E51BBBE86F",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.61,
   "yaw": 81.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0_HS_3_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A76A0622_8D74_59F5_416E_36630276E68C, this.camera_995FFBE2_8E6F_7195_41D2_6206EFC98BCB); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A3248498_8D0C_DAD5_41C3_34B7A750DCB8",
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.63,
   "yaw": 40.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_2_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739, this.camera_9929AC01_8E6F_7697_41CA_CA91F6A0E62F); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9BD67659_895A_7230_41C6_4A6B78CA969F",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.13,
   "yaw": -95.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_2_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9A6C3B02_8946_7210_41DC_3BD3D4A2B708",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.54,
   "yaw": -55.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258, this.camera_994F8BE9_8E6F_7197_41B3_8E71E984C337); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9905F750_8D1C_4655_41D1_9B3857C41058",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.04,
   "yaw": -66.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7, this.camera_98194B64_8E6F_729D_41C3_F68DEF97D6A3); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_96CB866B_8D34_464B_41D2_9269E55BBAD5",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.98,
   "yaw": -134.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_7_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713, this.camera_983CFB4B_8E6F_72AB_41E0_9821B586D400); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_996EE68C_8C0B_DA5F_41DF_18DD9462CA9A",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.81,
   "yaw": 150.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_5_0.png",
      "width": 971,
      "class": "ImageResourceLevel",
      "height": 545
     }
    ]
   },
   "hfov": 42.6,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 3.9,
   "yaw": -125.51
  }
 ],
 "id": "overlay_981EE3E0_8D14_BE75_41D6_19FD01ACEF7C",
 "maps": [
  {
   "hfov": 42.6,
   "yaw": -125.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_5_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_93E7A2AF_8D14_7ECB_41B5_9394D918AAF8, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_91AAD47E_8D0C_DA4D_4187_A02F5EF0E210",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.98,
   "yaw": -127.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_8_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_90CCD28C_8D15_FECD_41D1_A4C27A4CD341, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9073F775_8D14_C65F_41D7_A101ECE54689",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.8,
   "yaw": -120.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_9_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7, this.camera_982E1B57_8E6F_72BB_41BE_B107E1288B7D); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_935A69FB_8D14_4A4B_41C1_6BCDF68147ED",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.88,
   "yaw": -142.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_10_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC, this.camera_98089B6A_8E6F_7295_41D4_DC922D7F63AE); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_93592A9B_8D14_4ECB_41D5_FDCEBAF67DA9",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.85,
   "yaw": -134.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_11_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F, this.camera_98311B45_8E6F_729F_41B8_38D8A465D506); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_90DD89CA_8D15_CAB4_41CD_9E5E946EBC5D",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.81,
   "yaw": -120.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_13_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ]
   }
  }
 ]
},
{
 "transitionDuration": 500,
 "data": {
  "name": "Floor Plan"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "left": 0,
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 1,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 1,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "height": "99.975%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
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
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A016C92E_8C0B_D65A_41A1_349725D424ED, this.camera_99E5AC4A_8E6F_7695_41A7_30D45C69872D); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_980224A1_8D1C_BAF7_41CD_BA5645158502",
 "data": {
  "label": "Arrow 06c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.23,
   "yaw": 74.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9ED939E6_8D1D_CA7D_41BC_9D38FFEB7247",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.91,
   "yaw": -42.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9DBEC322_894A_D213_41C5_CB3EF135184E",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.6,
   "yaw": -55.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, true, 0, this.effect_AD0D37B6_8D1C_46DD_41DF_58FED68C8CA2, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9C25611D_894A_EE31_41D6_73A4F566270C",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.07,
   "yaw": 103.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_90163569_8C0D_5ED9_41E0_02DCB00FED17",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.58,
   "yaw": -158.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_2_HS_0_0.png",
      "width": 310,
      "class": "ImageResourceLevel",
      "height": 278
     }
    ]
   },
   "hfov": 13.63,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.41,
   "yaw": -34.16
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926, this.camera_98A6FBA6_8E6F_719D_41E1_8D6BFFCD8E44); this.mainPlayList.set('selectedIndex', 16); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, true, 0, this.effect_93917DF0_8D1B_CA55_41CE_794A0F2120BF, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9D6030AA_8CF4_5AF5_41DB_D5925C430CAB",
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.63,
   "yaw": -34.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_2_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_1_0.png",
      "width": 971,
      "class": "ImageResourceLevel",
      "height": 545
     }
    ]
   },
   "hfov": 42.66,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.53,
   "yaw": 27.13
  }
 ],
 "id": "overlay_AD6D8D7D_8D14_4A4F_41D4_D5604706D5B7",
 "maps": [
  {
   "hfov": 42.66,
   "yaw": 27.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_AD1C7D36_8D14_4BDD_41DD_C6EFA4F651D6, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD6D9D7D_8D14_4A4F_41C1_524A61D7DF33",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 25.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_2_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_AD1BED40_8D14_4BB5_41E1_20F868977652, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD6D7D7D_8D14_4A4F_41DD_108F089FDCD6",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 32.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_3_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7, this.camera_98C7BB8E_8E6F_71AD_419E_4AABB1B14B92); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD6D4D7D_8D14_4A4F_41C0_50C481AB490D",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.87,
   "yaw": 10.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_4_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD, this.camera_98D44B88_8E6F_7195_41D2_811B9DF3A37F); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD6D2D7D_8D14_4A4F_41DC_AA3DEB02EA3C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.85,
   "yaw": 10.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_5_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F, this.camera_98E5DB7C_8E6F_716D_41DC_A50D42587A9C); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD6D0D7D_8D14_4A4F_41D8_5188CD66680B",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 32.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_6_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7, this.camera_98B60B9A_8E6F_71B5_4196_CD944C9D1238); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AD6D1D7D_8D14_4A4F_41D2_D737ECE315C0",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 17.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC_0_HS_7_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 54,
 "propagateClick": false,
 "id": "IconButton_81572D86_8E5C_D19D_41D8_88393CDDC4D9",
 "paddingRight": 0,
 "class": "IconButton",
 "right": "26%",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 50,
 "minHeight": 1,
 "iconURL": "skin/IconButton_81572D86_8E5C_D19D_41D8_88393CDDC4D9.png",
 "bottom": "0.3%",
 "minWidth": 1,
 "mode": "push",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "height": 42,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 55,
 "data": {
  "name": "IconButton12826"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B, this.camera_9863DB15_8E6F_72BF_41D0_022868FAB1D8); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9899F433_8C17_BE4A_41C0_1A5BEFF017F6",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.24,
   "yaw": -130.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_2_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": true,
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_0_0.png",
      "width": 971,
      "class": "ImageResourceLevel",
      "height": 545
     }
    ]
   },
   "hfov": 42.66,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 2.36,
   "yaw": 39.89
  }
 ],
 "id": "overlay_BD2C00DB_8D74_DA54_41E0_57ACC01036AD",
 "maps": [
  {
   "hfov": 42.66,
   "yaw": 39.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_A2D2F0AA_8D74_DAF5_41C0_FD150229F63E, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BD2C20DB_8D74_DA54_41AA_C0A6AFD38C6E",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 38.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_1_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_A2CEC0AA_8D74_DAF5_41DC_A46FDC661A04, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BD2C70DB_8D74_DA54_41D0_D3677FAAA270",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 45.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_2_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7, this.camera_99B74C81_8E6F_7797_41C5_55465B3AF467); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BD2BB0DB_8D74_DA54_41A6_0DD97F08640E",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.87,
   "yaw": 23.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_3_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7663A13_8C17_4A4A_41D2_7DAEC71D1EEC, this.camera_99968CA4_8E6F_779D_41D6_64F382E39BE2); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BD2BA0DB_8D74_DA54_41D7_D6DB9C323618",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.86,
   "yaw": 30.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_4_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD, this.camera_99D58C5C_8E6F_76AD_41C0_6A722040976F); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BD2BE0DB_8D74_DA54_41DF_3BE3E8086BA7",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.81,
   "yaw": 23.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_5_1_0_map.gif",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 73
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7, this.camera_99A69C93_8E6F_77BB_41DE_5FE6014FE1A1); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BD2B00DB_8D74_DA54_41D7_D579A58BFC5A",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 30.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_6_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A76A0622_8D74_59F5_416E_36630276E68C, this.camera_99C7EC6F_8E6F_776B_41D2_C111A746FB3C); this.mainPlayList.set('selectedIndex', 23); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_BC69C1C2_8D0C_BAB4_41E0_E5FBCD8040C0",
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 23.24,
   "yaw": -61.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_7_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_2_HS_0_0.png",
      "width": 186,
      "class": "ImageResourceLevel",
      "height": 190
     }
    ]
   },
   "hfov": 8.22,
   "distance": 50,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.4,
   "yaw": -3.65
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926, this.camera_991BEC0D_8E6F_76AF_41E1_48469563FC48); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9C3F52BB_8CF4_5ED4_41D4_1CA2F98C3569",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.22,
   "yaw": -3.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7F8496B_8C15_F6D9_41C3_93D586540138_2_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_929FE66E_88D5_989B_41E0_FB789A9E3713, this.camera_98FBDB76_8E6F_717D_41CE_A9E28B995ACD); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_98CDF005_8C1D_7649_41D6_9CCBC7608A16",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.4,
   "yaw": 20.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9D128FA4_895A_5217_41CF_35CDEDCAC302",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.86,
   "yaw": -57.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD, this.camera_98699B21_8E6F_7297_41E0_351150F4886E); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9D2A145E_8946_5633_41BD_77A4E40C0018",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.73,
   "yaw": 12.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_91D0890C_88D6_E89F_41BB_A2F05281772E, this.camera_98569B27_8E6F_729B_41D2_C5240A768017); this.mainPlayList.set('selectedIndex', 11); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, true, 0, this.effect_92536B55_8D1C_4E5C_41DD_475D209523CB, 'showEffect', false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9A2EE295_894A_5230_41C0_9DECA94F20A6",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.25,
   "yaw": -80.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_832B361E_8C14_BA7A_41B0_986DC6718355",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.78,
   "yaw": 82.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_984A804E_8C15_56DB_41C7_DF2721A8F2BA",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.23,
   "yaw": -45.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_HS_3_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_995702D6_8C15_DBCB_41C9_15D7475FDE96",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.28,
   "yaw": -42.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_HS_4_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1, this.camera_99390BF5_8E6F_717F_41BD_640BFAE68805); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_9E1F3976_8D14_CA5C_41CB_75C062804E3B",
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.94,
   "yaw": 179.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0_HS_1_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C, this.camera_996DCBD7_8E6F_71BB_41DC_3F519317E8EF); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_98EDEF87_8C15_4A49_41D8_03EEB3639072",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.91,
   "yaw": -44.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0_HS_0_0_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
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
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_98DD934E_8C1F_5ADA_41DF_3707D51B707C",
 "data": {
  "label": "Circle Door 01"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.78,
   "yaw": -145.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "borderSize": 0,
 "width": 66,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "height": "100%",
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "- COLLAPSE"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "paddingRight": 40,
 "class": "Container",
 "right": "0%",
 "width": 300,
 "children": [
  "this.Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.IconButton_80B094D1_8E5C_F7B7_41E1_9309E37AB7C3",
  "this.IconButton_81572D86_8E5C_D19D_41D8_88393CDDC4D9"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "gap": 10,
 "height": "100%",
 "paddingBottom": 40,
 "backgroundOpacity": 0.7,
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 40,
 "overflow": "scroll",
 "data": {
  "name": "- EXPANDED"
 }
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "borderSize": 0,
 "width": 110,
 "minHeight": 1,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "height": 110,
 "top": "0%",
 "gap": 10,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "overflow": "visible",
 "data": {
  "name": "button menu sup"
 }
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "height": "85.959%",
 "gap": 3,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "width": "91.304%",
 "data": {
  "name": "-button set"
 }
},
{
 "maxHeight": 1095,
 "propagateClick": true,
 "id": "Image_911F6BD8_8C0D_C9C7_41A0_EF094875AE98",
 "left": "0%",
 "paddingRight": 0,
 "class": "Image",
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_911F6BD8_8C0D_C9C7_41A0_EF094875AE98.png",
 "minHeight": 30,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "minWidth": 40,
 "height": "100%",
 "top": "0%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "paddingTop": 0,
 "maxWidth": 1095,
 "data": {
  "name": "Image Company"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "layout": "horizontal",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "propagateClick": false
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "right": "15%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "bottom": "80%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 20,
 "overflow": "visible",
 "data": {
  "name": "Container X global"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "layout": "absolute",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "visible",
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "layout": "horizontal",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "propagateClick": false
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "right": "15%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "bottom": "80%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 20,
 "overflow": "visible",
 "data": {
  "name": "Container X global"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "layout": "absolute",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "visible",
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "layout": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "visible",
 "propagateClick": false
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "shadowVerticalLength": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "paddingRight": 0,
 "class": "Container",
 "right": "15%",
 "layout": "horizontal",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "minHeight": 1,
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "propagateClick": false
},
{
 "propagateClick": false,
 "scrollBarWidth": 10,
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "right": "15%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "borderSize": 0,
 "class": "Container",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "top": "10%",
 "scrollBarOpacity": 0.5,
 "bottom": "80%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 20,
 "overflow": "visible",
 "data": {
  "name": "Container X global"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "propagateClick": false,
 "data": {
  "name": "Label53051"
 },
 "id": "Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B",
 "paddingRight": 0,
 "class": "Label",
 "right": "35.76%",
 "fontColor": "#000000",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "text": "Label",
 "width": "19.12%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "1.48vmin",
 "height": "10.135%",
 "top": "32.43%",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_95DFAD56_8D0C_CA5C_41B2_7AAF0DAD63BA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_95DF3D56_8D0C_CA5C_419D_E84DE65364C6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A7FED7B4_8C14_DA4F_41E0_84020BC282C1_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_93419DB3_8946_3671_41DB_35C85E9C2199",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_933E6DB3_8946_3671_41AE_B3AB69789C6E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9863CD8D_8C35_4E59_41C7_2281B7EC4694",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_928BEDD7_88D6_AB8A_41D8_62EC708F2739_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_933FCDB3_8946_3671_41D6_83359D7C1DED",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_925EC89D_88DA_A9B9_41CE_737B61A94AA5_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9E555D5C_8D14_CA4D_41D9_1D7B0E418DE1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A7E57F7D_8C15_4AB9_41A7_2F340E56E926_2_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_B230EC6B_8D1B_CA4B_41DC_4A91136AA259",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_2_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_B2310C6B_8D1B_CA4B_41D3_7382A4D9962F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A76A0622_8D74_59F5_416E_36630276E68C_2_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9C3F9FB5_8C1D_4A49_41CA_C45EE40106D5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9C3F5FB5_8C1D_4A49_41CD_E4D99FF14473",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_92BD5EBB_88D5_69FA_41D8_865E6211A046_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9E566D5C_8D14_CA4D_41DD_C27EC4E4D01A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A7DA4CC7_8C14_CFC9_41CB_24875E9167A7_2_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_957B1E5E_8C15_CAFB_41B6_8EF338FC037A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_957B7E5E_8C15_CAFB_41D6_FB0BBE7A02D6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_91E5B8CD_88D5_E999_41B5_5BE3CAFA4A2B_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_B2304C6B_8D1B_CA4B_41B4_0B635E159451",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A7628F37_8D74_47DB_41C0_D6FCB4C13436_2_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_92832D9C_8C1B_4E7E_41DE_8C2E0E3EE316",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_2_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_95772E58_8C15_CAC7_41DD_E2EDE6BB0AC3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_929D7F5B_88D6_A8BA_41BE_320EB797D8B6_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_95DEAD56_8D0C_CA5C_41D9_86FF7A9C3F5B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A016C92E_8C0B_D65A_41A1_349725D424ED_0_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_950083C8_8C0D_D9C7_41E1_3DCFCE79F11B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_923BCD5E_88D5_A8BB_41D4_6D4686DF08CD_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_99AEF173_8E54_D17B_41BC_6E39D60A899A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_95DE3D56_8D0C_CA5C_41D3_3B6B078BD3C3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A7FD785B_8C0B_76F9_41DE_5864569AB258_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_999EBDE2_8C17_49CB_41D9_DCDA7E8C9002",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_99911DE2_8C17_49CB_41CC_EACB6FA93044",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_91F6E777_8CF7_5AC9_41C5_4259D38EB1E9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_9249EE30_88D6_A887_41D4_F1857C016DB0_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_928EBDA2_8C1B_4E4B_41D6_55F0062F90AF",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_923E8DAE_88DB_6B9A_41E0_99F4973C839C_2_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_B23FDC6B_8D1B_CA4B_41D1_8E32A753855B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BC4FA7BA_8D74_C6D5_41BB_22E56B015D6F_2_HS_7_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9677361D_8C1C_DA79_41D0_8C3BC2B8B13D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_91D0890C_88D6_E89F_41BB_A2F05281772E_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_999F1DDC_8C17_49FF_41D1_7148472CAD13",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_95038849_8C0B_B6D9_41D8_9C3C3A884430",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_933F6DB3_8946_3671_41C6_3DCBED444A9B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_929FE66E_88D5_989B_41E0_FB789A9E3713_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9C3E9FB5_8C1D_4A49_41C7_82F81ADCD25B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_95752E58_8C15_CAC7_41C0_BC29890D8D41",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_957A8E5E_8C15_CAFB_41DE_8243F8FC07F7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_922DBEA9_88D7_A986_41D8_0414006B6236_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_95DF4D56_8D0C_CA5C_41C1_907EC8ED1775",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_A7E49A57_8C15_4AC9_41C5_C4CEA1135F0A_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9A11DC83_8C1C_CE49_41D3_95EECC4FD1E5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_9608861D_8C1C_DA79_41C0_7BFFFD82EF95",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_91B5F8AD_88CA_A99E_41E0_6889A1260D6B_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 36,
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "top": "0%",
 "gap": 10,
 "height": "100%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.4,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container black"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 80,
 "propagateClick": true,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 50,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 80,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "maxHeight": 1095,
 "propagateClick": true,
 "id": "Image_7DB3C373_7065_34DE_41BA_CF5206137DED",
 "left": "0%",
 "paddingRight": 0,
 "class": "Image",
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_7DB3C373_7065_34DE_41BA_CF5206137DED.png",
 "minHeight": 30,
 "horizontalAlign": "left",
 "width": "100%",
 "verticalAlign": "top",
 "minWidth": 40,
 "height": "25%",
 "top": "0%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "paddingTop": 0,
 "maxWidth": 1095,
 "data": {
  "name": "Image Company"
 }
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "left": "0%",
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
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
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "bottom": "23.43%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "top": "26.57%",
 "gap": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "-Container buttons"
 }
},
{
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "left": "0%",
 "layout": "vertical",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "height": "21.161%",
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "-Container footer"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 60,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "height": 60,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "image button menu"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareTwitter(window.location.href)",
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 58,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minWidth": 1,
 "mode": "push",
 "click": "this.shareFacebook(window.location.href)",
 "height": 58,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "layout": "absolute",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "height": "100%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "85%",
 "data": {
  "name": "-left"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "layout": "vertical",
 "propagateClick": false,
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "class": "Container",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "height": "100%",
 "paddingBottom": 20,
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "width": "50%",
 "data": {
  "name": "-right"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "75%",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "layout": "absolute",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "height": 140,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "header"
 }
},
{
 "itemThumbnailWidth": 220,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "paddingLeft": 70,
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "class": "ThumbnailGrid",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "itemThumbnailOpacity": 1,
 "itemBorderRadius": 0,
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "itemLabelFontFamily": "Oswald",
 "minWidth": 1,
 "itemPaddingLeft": 3,
 "itemMaxWidth": 1000,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "height": "92%",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemHorizontalAlign": "center",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "backgroundOpacity": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "shadow": false,
 "itemThumbnailBorderRadius": 0,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "itemWidth": 220,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
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
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "gap": 26,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailHeight": 125,
 "paddingBottom": 70,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailShadow": false,
 "borderRadius": 5,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelGap": 7,
 "scrollBarWidth": 10,
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "propagateClick": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "WebFrame",
 "borderSize": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "width": "100%",
 "minWidth": 1,
 "insetBorder": false,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "75%",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
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
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "height": 140,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "width": "100%",
 "data": {
  "name": "header"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "layout": "absolute",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "height": "100%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "width": "100%",
 "data": {
  "name": "Container photo"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "layout": "absolute",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "height": "100%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "55%",
 "data": {
  "name": "-left"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "layout": "vertical",
 "propagateClick": false,
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "class": "Container",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "height": "100%",
 "paddingBottom": 20,
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "width": "45%",
 "data": {
  "name": "-right"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "75%",
 "width": "25%",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB31382_7065_343F_41D6_641BBE1B2562",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Tour Info"
 },
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "borderSize": 0,
 "width": 220,
 "iconHeight": 32,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "layout": "horizontal",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Main Lobby",
 "horizontalAlign": "left",
 "height": 50,
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false)",
 "fontStyle": "italic",
 "backgroundOpacity": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadow": false,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Panorama List"
 },
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Perpustakaan",
 "height": 50,
 "shadowBlurRadius": 6,
 "gap": 23,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B, false, 0, null, null, false); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadow": false,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB35382_7065_343F_41C5_CF0EAF3E4CFF",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Location"
 },
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "pressedLabel": "Location",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Student Corner",
 "height": 50,
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B, false, 0, null, null, false); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadow": false,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DB37382_7065_343F_41CC_EC41ABCCDE1B",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Floorplan"
 },
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Smart-Classroom",
 "height": 50,
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 13); this.setComponentVisibility(this.Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B, false, 0, null, null, false); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, true, 0, this.effect_A952D41F_8D74_59CB_41AC_1C0312705211, 'showEffect', false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadow": false,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DBC8382_7065_343F_4183_17B44518DB40",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Photoalbum"
 },
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Aula",
 "height": 50,
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B, false, 0, null, null, false); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, true, 0, this.effect_A9A33083_8D74_FAB4_41DC_D18A2E5FB63E, 'showEffect', false); this.mainPlayList.set('selectedIndex', 23)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadow": false,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DBCA382_7065_343F_41DB_48D975E3D9EC",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "label": "Mushola",
 "height": 50,
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Label_A8CFAF84_8C3D_4A4F_41D1_D8A781A1A49B, false, 0, null, null, false); this.setComponentVisibility(this.Label_97591067_8D3C_5A7B_41C9_023909B4D215, false, 0, null, null, false); this.setComponentVisibility(this.Label_90D4D0DE_8D34_DA4D_41C9_7B96E42C8CEE, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, false, 0, null, null, false); this.setComponentVisibility(this.Label_902AAE5D_8D0D_C64F_41CD_C8B4E3E2AC29, false, 0, null, null, false); this.setComponentVisibility(this.Label_96CAAABE_8D0C_CECD_41DF_134A494B4D1B, false, 0, null, null, false); this.setComponentVisibility(this.Label_91671389_8D0C_BEB7_41BE_3E024B0CBFA2, false, 0, null, null, false); this.setComponentVisibility(this.Label_960AE679_8D0C_4654_41E0_13C0164AE489, false, 0, null, null, false); this.setComponentVisibility(this.Label_91245760_8D0C_4674_41E1_819C525ED2B6, false, 0, null, null, false); this.setComponentVisibility(this.Label_911CAACF_8D0C_CE4B_41D4_68838C2C1A4B, true, 0, this.effect_A995265E_8D74_464D_41E1_82FDAEBA4CF7, 'showEffect', false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadow": false,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "line"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_AEB9D8DA_8C1F_57FB_41DD_0759E8707B2F",
 "layout": "absolute",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "height": 1,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_AE9287F9_8C1F_79B9_41D4_B6234F05313D",
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFCC33",
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": "20px",
 "label": "PMB UBSI",
 "height": 60,
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://pmbubsi.id/', '_blank')",
 "fontStyle": "normal",
 "paddingBottom": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadow": false,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontWeight": "bold"
},
{
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "layout": "horizontal",
 "propagateClick": true,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 40,
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 2,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "data": {
  "name": "blue line"
 }
},
{
 "propagateClick": true,
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "HTMLText",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": 96,
 "width": "100%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>KAMPUS REKTORAT UBSI</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Jl. Kramat Raya No.98, RT.2/RW.9, Kwitang, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta www.bsi.ac.id</I></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 80,
 "propagateClick": true,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "width": 42,
 "minHeight": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": 42,
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 80,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "maxHeight": 1000,
 "propagateClick": false,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingRight": 0,
 "class": "Image",
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "width": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "paddingTop": 0,
 "maxWidth": 2000,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "layout": "horizontal",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "right",
 "gap": 0,
 "height": 50,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "Container space"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "layout": "vertical",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "borderSize": 0,
 "minHeight": 300,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "height": "100%",
 "paddingBottom": 10,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "Container text"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "layout": "horizontal",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 370,
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 30,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container space"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "verticalAlign": "top",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "36.14%",
 "width": "100%",
 "top": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "verticalAlign": "top",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "36.14%",
 "width": "100%",
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 }
},
{
 "transitionDuration": 500,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 1,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 1,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressRight": 0,
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
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "bottom": "20%",
 "mode": "push",
 "verticalAlign": "middle",
 "minWidth": 50,
 "horizontalAlign": "center",
 "width": "14.22%",
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton <"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingRight": 0,
 "class": "IconButton",
 "right": 10,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "bottom": "20%",
 "mode": "push",
 "verticalAlign": "middle",
 "minWidth": 50,
 "horizontalAlign": "center",
 "width": "14.22%",
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton >"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingRight": 0,
 "class": "IconButton",
 "right": 20,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "verticalAlign": "top",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "height": "10%",
 "width": "10%",
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 1000,
 "propagateClick": false,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingRight": 0,
 "class": "Image",
 "paddingLeft": 0,
 "borderSize": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "horizontalAlign": "center",
 "width": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "paddingTop": 0,
 "maxWidth": 2000,
 "data": {
  "name": "Image40635"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "layout": "horizontal",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "right",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "height": "5%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "Container space"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "layout": "vertical",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "class": "Container",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "borderSize": 0,
 "minHeight": 520,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "height": "100%",
 "paddingBottom": 30,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "Container text"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "layout": "horizontal",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "width": 370,
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container space"
 }
},
{
 "propagateClick": false,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "width": "100%",
 "paddingBottom": 20,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.41vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.41vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.76vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button31015"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "layout": "horizontal",
 "propagateClick": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Oswald",
 "class": "Button",
 "fontColor": "#FFFFFF",
 "width": 180,
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": 50,
 "mode": "push",
 "minWidth": 1,
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "horizontalAlign": "center",
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontStyle": "italic",
 "paddingBottom": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "borderRadius": 50,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "bold"
},
{
 "propagateClick": false,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "class": "HTMLText",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "46%",
 "width": "100%",
 "paddingBottom": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.41vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.41vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "layout": "horizontal",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "borderSize": 0,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "height": "75%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "width": "100%",
 "data": {
  "name": "- content"
 }
},
{
 "maxHeight": 200,
 "propagateClick": false,
 "horizontalAlign": "left",
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "class": "Image",
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "width": "25%",
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "paddingTop": 0,
 "maxWidth": 200,
 "data": {
  "name": "agent photo"
 }
},
{
 "propagateClick": false,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "class": "HTMLText",
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "height": "100%",
 "width": "75%",
 "paddingBottom": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.43vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.32vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.32vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.32vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "width": "100%",
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
