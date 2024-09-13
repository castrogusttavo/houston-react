import React from 'react'
import { Icon, IconProps } from '../Icon'

export function YenSquareIcon({
  iconName = 'yen-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
