import React from 'react'
import { Icon, IconProps } from '../Icon'

export function InformationSquareIcon({
  iconName = 'information-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
