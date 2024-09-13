import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WasteRestoreIcon({
  iconName = 'waste-restore',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
