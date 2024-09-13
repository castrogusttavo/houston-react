import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowAllDirectionIcon({
  iconName = 'arrow-all-direction',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
