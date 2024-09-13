import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BreastPumpIcon({
  iconName = 'breast-pump',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
