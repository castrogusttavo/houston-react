import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ComputerPhoneSyncIcon({
  iconName = 'computer-phone-sync',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
