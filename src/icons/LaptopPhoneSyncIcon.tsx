import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LaptopPhoneSyncIcon({
  iconName = 'laptop-phone-sync',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
