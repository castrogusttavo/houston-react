import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IdentificationIcon({
  iconName = 'identification',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
