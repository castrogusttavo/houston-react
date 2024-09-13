import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SecurityBlockIcon({
  iconName = 'security-block',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
