import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArrowReloadVerticalIcon({
  iconName = 'arrow-reload-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
