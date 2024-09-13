import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StickyNote02Icon({
  iconName = 'sticky-note-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
