import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MagicWand02Icon({
  iconName = 'magic-wand-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
