import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SmartWatch01Icon({
  iconName = 'smart-watch-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
