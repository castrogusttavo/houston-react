import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MobileNavigator01Icon({
  iconName = 'mobile-navigator-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
