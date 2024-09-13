import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileManagementIcon({
  iconName = 'file-management',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
