import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KeyGeneratorFobIcon({
  iconName = 'key-generator-fob',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
