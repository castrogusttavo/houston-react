import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextAllCapsIcon({
  iconName = 'text-all-caps',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
