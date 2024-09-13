import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CoPresentIcon({
  iconName = 'co-present',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
