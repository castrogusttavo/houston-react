import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GooglePhotosIcon({ iconName = 'google-photos-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
