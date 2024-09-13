import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PenToolAddIcon({
  iconName = 'pen-tool-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
