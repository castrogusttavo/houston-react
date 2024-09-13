import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlusSignSquareIcon({
  iconName = 'plus-sign-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
