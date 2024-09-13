import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlickrIcon({ iconName = 'flickr', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
