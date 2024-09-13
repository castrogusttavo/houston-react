import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoogleDriveIcon({
  iconName = 'google-drive',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
