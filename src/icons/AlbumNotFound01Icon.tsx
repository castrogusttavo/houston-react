import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlbumNotFound01Icon({
  iconName = 'album-not-found-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
