/**
 * @function Avatar
 * @description Display Profile Avatar with menu options.
 */
/* --- Global --- */
import React from 'react'
import {BoxInject} from '3box-ui-state'
import {ProfileImage} from './ProfileImage'

/* --- Component --- */
const AvatarView = ({ sx, ...props }) => 
<>
  <ProfileImage sx={sx} opacity={1}/> 
</>

export const Avatar = props =><BoxInject><AvatarView {...props} /></BoxInject>
