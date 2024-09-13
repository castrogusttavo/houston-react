import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ExternalDriveIcon({
  iconName = 'external-drive',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
